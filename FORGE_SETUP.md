# Forge Setup Instructions

## Проблема та рішення

Ваша оригінальна конфігурація мала неправильний синтаксис для `displayConditions`. Ось що було виправлено:

### Неправильно (ваша оригінальна конфігурація):
```yaml
jira:issueContext:
  - key: sla-time-and-report-devi-issue-context
    title: "[DEV][i] SLA"
    label: "[DEV][i] SLA"
    icon: /logos/sla-logo.svg
    resource: application
    displayConditions:
      isLoggedIn: true
      entityPropertyExists:  # ❌ Неправильно - має бути вкладеним
        entity: issue
        propertyKey: slatimeandreportdevi
    resolver:
      function: application-resolver
```

### Правильно (виправлена конфігурація):
```yaml
modules:
  jira:issueContext:
    - key: sla-time-and-report-devi-issue-context
      title: "[DEV][i] SLA"
      label: "[DEV][i] SLA"
      icon: /logos/sla-logo.svg
      resource: application
      displayConditions:
        isLoggedIn: true
        entityPropertyExists:  # ✅ Правильно - вкладений об'єкт
          entity: issue
          propertyKey: slatimeandreportdevi
      resolver:
        function: application-resolver
```

## Кроки для налаштування

1. **Встановіть залежності:**
   ```bash
   cd server
   npm install
   ```

2. **Збудуйте проект:**
   ```bash
   npm run build
   ```

3. **Налаштуйте Forge CLI:**
   ```bash
   npm install -g @forge/cli
   forge login
   ```

4. **Створіть додаток (якщо ще не створений):**
   ```bash
   forge create
   ```

5. **Розгорніть додаток:**
   ```bash
   forge deploy
   ```

6. **Встановіть додаток в Jira:**
   ```bash
   forge install
   ```

## Перевірка роботи

1. Відкрийте задачу OI-2 в Jira
2. Переконайтеся, що у задачі є властивість `slatimeandreportdevi`
3. Віджет повинен з'явитися на панельці задачі

## Додаткові налаштування

### Якщо віджет все ще не відображається:

1. **Перевірте логи:**
   ```bash
   forge logs
   ```

2. **Перевірте, чи правильно встановлений додаток:**
   ```bash
   forge apps list
   ```

3. **Перевірте права доступу:**
   - Переконайтеся, що у маніфесті є `read:jira-property` scope
   - Перевірте, чи має користувач права на перегляд властивостей задачі

### Альтернативні умови відображення

Якщо `entityPropertyExists` не працює, можна спробувати:

```yaml
displayConditions:
  isLoggedIn: true
  issuePropertyExists:
    propertyKey: slatimeandreportdevi
```

або

```yaml
displayConditions:
  isLoggedIn: true
  issueProperty:
    key: slatimeandreportdevi
    exists: true
```

## Структура проекту

```
├── manifest.yml          # Конфігурація Forge
├── server/
│   ├── src/
│   │   └── index.ts      # Функція-резолвер
│   ├── package.json      # Залежності
│   └── tsconfig.json     # TypeScript конфігурація
└── FORGE_SETUP.md        # Ця інструкція
```