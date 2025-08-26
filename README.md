# SLA Time and Report Deviations Widget

Цей Forge віджет відображається в панельці задачі Jira тільки для тих задач, які мають властивість `slatimeandreportdevi`.

## Налаштування

### 1. Встановлення залежностей
```bash
npm install
```

### 2. Налаштування маніфесту
Відредагуйте `manifest.yml`:
- Замініть `your-app-id` на ваш реальний App ID
- Перевірте, що `propertyKey: slatimeandreportdevi` відповідає ключу властивості в ваших задачах

### 3. Збірка та розгортання
```bash
# Збірка проекту
forge build

# Розгортання в Atlassian
forge deploy

# Встановлення в Jira
forge install
```

## Структура проекту

```
├── manifest.yml          # Конфігурація Forge додатку
├── index.js             # Функція-резолвер для віджета
├── package.json         # Залежності проекту
├── public/
│   └── logos/
│       └── sla-logo.svg # Логотип віджета
└── README.md           # Цей файл
```

## Важливі моменти

### Display Conditions
Віджет налаштований на відображення тільки коли:
1. Користувач авторизований (`isLoggedIn: true`)
2. Задача має властивість з ключем `slatimeandreportdevi` (`entityPropertyExists`)

### Permissions
Додаток потребує наступні дозволи:
- `read:jira-work` - для читання даних задач
- `read:jira-user` - для отримання інформації про користувача
- `read:jira-property` - для читання властивостей задач

## Виправлення проблем

### Віджет не відображається
1. Перевірте, що задача має властивість з ключем `slatimeandreportdevi`
2. Переконайтеся, що користувач авторизований
3. Перевірте логи в Forge Developer Console

### Помилки збірки
1. Переконайтеся, що всі залежності встановлені
2. Перевірте синтаксис в `manifest.yml`
3. Використовуйте `forge lint` для перевірки конфігурації
