# QUIZ по JavaScript 'Что будет выведено в консоль?' v1.0.0

## [Проект на платформе Vercel](https://quiz-nextjs-zustand.vercel.app/)

### Страницы:

- Главная: *Server-Side Rendering (SSR)*
    - header
        - Logo
        - кнопка получения 20 случайных вопросов
        - счётчик правильных / неправильных ответов ( хранятся в localStorage )
    - 20 карточек
        - вопросы по JS с подсвеченным синтаксисом
        - форма с вариантами ответа
        - по нажатию на кнопку всплывает модальное окно с правильным ответом и пояснением

### Технологии, применённые в проекте:

- NextJS (client & server)
- TypeScript
- GitFlow
- package:
    - highlight.js
    - zustand (state manager)