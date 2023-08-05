class PhoneBook {
  #ATTRS = {
    dataUserId: "data-user-id",
    dataRemoveBtn: "data-remove-btn",
    dataCallBtn: "data-call-btn",
    dataEndCallBtn: "data-end-call-btn"
  };
  list = null;
  listUl = null;
  searchInput = null;
  callDurationEl = null;
  #contacts = [];
  #searchedUsers = [];
  #modal = null;

  constructor(users, listSelector) {
    this.list = document.querySelector(listSelector);
    this.listUl = this.list.querySelector("ul");
    this.searchInput = document.getElementById("contacts-search");

    this.#modal = new bootstrap.Modal("#exampleModalToggle", {
      keyboard: false,
      backdrop: "static"
    });

    this.callDurationEl = this.#modal._element.querySelector(".modal-title .duration");

    this.#setEvents();

    // add users to contacts
    users.forEach(user => {
      this.addContact(user);
    });
  }

  addContact(user) {
    if (user.id === null) return;

    const userInstance = new User(user);
    userInstance.template = this.createContactTemplate(userInstance);

    this.#contacts.push(userInstance);
    this.listUl.prepend(this.#contacts.at(-1).template);
  }

  call(contactId) {
    const contact = this.#contacts.find(({ id }) => id === contactId);

    this.#modal._element.querySelector(".modal-title .title").innerHTML = contact.name;
    this.#modal._element.querySelector(".modal-body").innerHTML = "Conversation with " + contact.phone;
    this.#modal.show();

    callController.startCall(contact);
  }

  removeContact(contactId) {
    const contactIndex = this.#contacts.findIndex(({ id }) => id === contactId);
    this.#contacts[contactIndex].template.remove();
    this.#contacts.splice(contactIndex, 1);
  }

  search(query) {
    this.#searchedUsers = [];

    if (!query) {
      this.listUl.innerHTML = "";
      this.#contacts.forEach(c => {
        this.listUl.append(c.template);
      });
      return;
    }

    const input = query.toLowerCase();

    this.#contacts.forEach(contact => {

      const name = contact.name.toLowerCase();
      const phone = contact.phone.toLowerCase();
      const email = contact.email.toLowerCase();

      const words = name.split(" ");
      const firstName = words[0];
      const lastName = words.length > 1 ? words[1] : "";

      if (firstName === input ||
        lastName === input ||
        phone === input ||
        email === input ||
        firstName.startsWith(input) ||
        lastName.startsWith(input) ||
        phone.startsWith(input) ||
        email.startsWith(input)) {

        this.#searchedUsers.push(contact);
      }

    });

    this.listUl.innerHTML = "";
    this.#searchedUsers.forEach(c => {
      this.listUl.append(c.template);
    });

  }

  #setEvents() {
    Call.addSubscription(Call.EVENT_TYPES.changeStatus, this.#trackCallStatus);
    Call.addSubscription(Call.EVENT_TYPES.changeDuration, this.#trackCallDuration);

    this.searchInput.addEventListener("input", this.#searchHandler);
    this.list.addEventListener("click", this.#removeHandler);
    this.list.addEventListener("click", this.#callHandler);
    this.#modal._element.querySelector(`[${this.#ATTRS.dataEndCallBtn}]`).addEventListener("click", this.#endCall);
  }


  // your methods

  #searchHandler = () => {
    this.search(this.searchInput.value);
  };
  #removeHandler = (e) => {
    const { target: element } = e;
    e.stopPropagation();
    if (!element.closest(`[${this.#ATTRS.dataRemoveBtn}]`)?.hasAttribute(this.#ATTRS.dataRemoveBtn)) return;
    const userId = +element.closest(`[${this.#ATTRS.dataUserId}]`).getAttribute(this.#ATTRS.dataUserId);
    this.removeContact(userId);
  };

  #callHandler = (e) => {
    const { target: element } = e;
    e.stopPropagation();
    if (!element.closest(`[${this.#ATTRS.dataCallBtn}]`)?.hasAttribute(this.#ATTRS.dataCallBtn)) return;
    const userId = +element.closest(`[${this.#ATTRS.dataUserId}]`).getAttribute(this.#ATTRS.dataUserId);
    this.call(userId);
  };

  #endCall = () => {
    callController.endCall();
    this.#modal.hide();
    this.callDurationEl.innerHTML = "00:00";
  };

  #trackCallStatus = (newStatus) => {
    if (!Call.endCallStatuses.includes(newStatus)) return;
    this.#endCall();
  };

  #trackCallDuration = (duration) => {
    this.callDurationEl.innerHTML = "00:0" + duration;
  };

  createContactTemplate(user) {
    const wrapper = document.createElement("div");
    wrapper.className = "list-group-item d-flex justify-content-between align-items-center";
    wrapper.setAttribute("data-user-id", user.id);

    wrapper.innerHTML = `<span class="contacts__contact">${user.name}</span>
                            <div> 
                                <button type="button" ${this.#ATTRS.dataCallBtn} class="btn btn-success">
                                    <i class="bi bi-telephone"></i>
                                </button>

                                <button type="button" ${this.#ATTRS.dataRemoveBtn} class="btn btn-danger">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>`;

    return wrapper;
  }
}


const phoneBook = new PhoneBook(users, ".contacts__list");
