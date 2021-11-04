<template>
  <div class="main">
    <div class="main__title">Список дел на вторник</div>

    <ul class="main__list">
      <li class="main__item">
        <input class="main__checkbox" type="checkbox" />
        <p class="main__task">Покормить кота</p>
        <p class="main__datetime">22.02.2021 22:22</p>
        <p class="delete">x</p>
      </li>
      <li class="main__item">
        <input class="main__checkbox" type="checkbox" />
        <p class="main__task">Перебрать вещи в шкафу</p>
        <p class="main__datetime">22.02.2021 22:22</p>
        <p class="delete">x</p>
      </li>
      <li class="main__item">
        <input class="main__checkbox" type="checkbox" />
        <p class="main__task">Убрать пыль с поверхностей</p>
        <p class="main__datetime">22.02.2021 22:22</p>
        <p class="delete">x</p>
      </li>
    </ul>

    <div class="main__add">
      <input
        class="main__input input"
        type="text"
        placeholder="Введите название дела"
      />
      <input class="main__checkbox" type="checkbox" />
      <p class="main__important">Срочное</p>
      <button class="main__btn btn">Добавить дело</button>
    </div>
  </div>
</template>
