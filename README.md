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
| название | тип | описание |
| -------- | --- | -------- |
| `"feature"` | `string` | Ключ эксперимента, должен совпадать с ключом фичи в конфиге Feature Toggler. По этому значению клиент запрашивает фичи. |
| `"enabled"` | `boolean` |  |
| `"always_enabled_for_ids"` | `map[int, boolean]` |  |
| `"is_active"` | `boolean` |  |
| `"enabled"` |  |  |
| `"enabled"` |  |  |
| `"enabled"` |  |  |
| `"enabled"` |  |  |
| `"enabled"` |  |  |
| `"enabled"` |  |  |
| `"enabled"` |  |  |
| `"enabled"` |  |  |
| `"enabled"` |  |  |
| `"enabled"` |  |  |
| `"enabled"` |  |  |
| `"enabled"` |  |  |
| `"enabled"` |  |  |
| `"enabled"` |  |  |
| `"enabled"` |  |  |

