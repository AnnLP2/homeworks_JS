Реализуйте компонент <Modal> (Модальное окно)

Использование — https://github.com/junjun-it-courses/react-hw/blob/master/task-13/components.jsx

HTML закрытого состояния —
<div>
  <button type="button" class="modal-open-button btn btn-danger">Open</button>
  <div class="modal" style="display: none;" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">Modal title</div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
        <div class="modal-footer">
          <button type="button" class="modal-close-button btn btn-default">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>

В открытом состоянии строчка: `<div class="modal" style="display: none;">` заменяется
на `<div class="modal fade show" style="display: block;">`

У открытого модального окна две кнопки закрывающие его: крестик справа вверху и кнопка Cancel справа внизу.