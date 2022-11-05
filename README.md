# Введение
...


# Структура конфига
Общая структура конфига выглядит так:

```json
{
  // <...>
  // другие фичи
  // <...>

  "config_feature_name": {
    "feature": "feature_name",
    "enabled": true,
    "is_active": true,

    // <...>
    // другие условия
    // <...>

    "distribution_event": "experiment_event",

    "division_config": {
      // <...>
      // условия деления
      // <...>
    },

    "groups": {
      // <...>
      // условия деления для каждоый группы
      // <...>
    }
  },

  // <...>
  // другие фичи
  // <...>
}
```


# Описание возможных полей и их значений
## Поля для определения фичи
| название | тип | описание |
| -------- | --- | -------- |
| `"feature"` | `str` | Ключ эксперимента, должен совпадать с ключом фичи в конфиге Feature Toggler. По этому значению клиент запрашивает фичи. |
| `"rule"` | `str` | Какое правило использовать для назначения фичи (пока реализовано только значение `"experiment.Rule"`). |
| `"ruleOptions"` | `object` | Правила и условия назначения фичи (см. ниже). |


## Поля для `"ruleOptions"`
| название | тип&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | описание |
| -------- | --- | -------- |
| `"enabled"` | `bool` | Доступна ли фича для распределения. |
| `"always_enabled_for_ids"` | `map[int, bool]` | Для каких `id` пользователей фича всегда доступна. |
| `"is_active"` | `bool` | Активно ли распределение по разным группам эксперимента (при выставлении значения `false` нужно указать в поле `"groups"`, какая группа эксперимента раскатывается на всех). |
| `"distribution_event"` | `str` | Событие эксперимента, которе будет отправляться в таблицу `stat.funnelTrack`, если пользователь прошёл все условия для попадания в эксперимент. |
| `"region"` | `str` | В каком регионе (для какого приложения) доступна фича. |
| `"store"` | `map[str, bool]` | Для каких источников установки доступна фича. Работает только для фичей на Android. Название стора указывается как название пакета приложения. Например, `"com.android.vending"` — приложение было установлено из Google Play, `"org.telegram.messenger"` — приложение было установлено из Telegram и так далее. |
| `"price_group"` | `map[int, bool]` | Для каких ценовых групп доступна фича. |
| `"children"` | `map[str, bool]` | _В данный момент не работает! Условия для устройств детей нужно указывать на клиенте при реализации запроса фичи._ |
| `"active_subscription"` | `bool` | Есть ли у пользователя подписка или активированный триал (кроме начального). |
| `"active_minutes"` | `bool` | Есть ли у пользователя баланс минут. |
| `"ipc"` | `map[str, bool]` | В каких странах (по IP) фича доступна. |
| `"excluded_ipc"` | `map[str, bool]` | В каких странах (по IP) фича не доступна. |
| `"mcc"` | `map[int, bool]` | В каких странах (по СИМ-карте) фича доступна. |
| `"excluded_mcc"` | `map[int, bool]` | В каких странах (по СИМ-карте) фича не доступна. |
| `"locales"` | `map[str, bool]` | Для каких языков приложения фича доступна. |
| `"excluded_locales"` | `map[str, bool]` | Для каких языков приложения фича не доступна. |
| `"license_accept"` | `bool` | Принял ли пользователь Лицензионное соглашение и Политику обработки персональных данных в первой сессии. |
| `"first_install"` | `str` | Версия, с которой пользовательсовершил первую установку, в формате строки, например `"2.5.30"`. |
| `"minimal_app_version"` | `int` | Минимально необходимая версия, чтобы фича стала доступной, в виже числа, например, `2005307`. |
| `"division_config"` | `object` | Правила определения деления (см. ниже). |
| `"groups"` | `object` | Правила распределения по группам в зависимости от деления (см. ниже). |


## Поля для задания деления эксперимента
Условия деления и распределения пользователей по группам задаются значениями полей `"division_config"` и `"groups"` соответственно.

Для распределения пользователей по группам используется формула:

$$
\text{division} := \text{CRC32(\text{uid} + \text{salt})} \mod m
$$

где:
- $\text{division}$ — число из отрезка $[0, m-1]$, по котрому определяется группа пользователя
- $\text{CRC32}(\cdot)$ — хэш-функция CRC32, возвращает 32-битное число
- $\text{uid}$ — `uid` пользователя (или `id`, см. ниже)
- $\text{salt}$ — соль, прибавляемая к `uid`
- $\text{m}$ — любое натуральное число больше 1ж


### Поля для `"division_config"`
| название | тип | описание |
| -------- | --- | -------- |
| `"hash_type"` | `str` | Какую хэш-функцию использовать для определения деления. В данный момент доступна только `"crc32"`, в планах добавить `"md5"`. |
| `"use_uid"` | `bool` | Использовать ли для расчёта деления `uid` пользователя. Если `false` или не задано, будет использован `id` пользователя. |
| `"salt"` | `str` | Какую соль |
| `"remainder_number"` | `int` | На какое число делить значение хэш-функции (см. форумлу выше). |


### Поля для `"groups"`
Задаётся в виде:

```json
"groups": {
    "group_name_1": {
      // <...>
      // условия группы
      // <...>
    },

    "group_name_2": {
      // <...>
      // условия группы
      // <...>
    },

  // <...>
}
```

Условия для группы могут быть следующие:

| название | тип | описание |
| -------- | --- | -------- |
| `"greater_than_or_equal_to_percent"` | `int` | Начиная с какого числа деления пользователи попадают в эту группу. |
| `"less_than_or_equal_to_percent"` | `int` | Заканчивая каким числом деления пользователи попадают в эту группу. |
| `"starting_from_user_id"` | `int` | Начиная с какого `id` пользователя юзеры попадают в эту группу. |
| `"ending_by_user_id"` | `int` | Заканчивая каким `id` пользователя юзеры попадают в эту группу. |

Остальные поля не актуальны, их использовать не стоит.
