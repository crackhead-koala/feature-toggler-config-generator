from flask_wtf import FlaskForm
from wtforms import (
    StringField,
    TextAreaField,
    BooleanField,
    SelectField,
    IntegerField
)
from wtforms.validators import DataRequired, NumberRange


class ConfigForm(FlaskForm):

    # required fields
    feature_name = StringField('Feature name', validators=[DataRequired()])
    enabled = BooleanField('Enabled')
    is_active = BooleanField('Active')
    distribution_event = \
        StringField('Distribution action', validators=[DataRequired()])

    use_always_enabled_for_ids = \
        BooleanField('Always active for specific user IDs')
    always_enabled_for_ids = TextAreaField()

    use_first_install = BooleanField('First install version')
    first_install = StringField()

    use_minimal_app_version = BooleanField('Minimal app version')
    minimal_app_version = StringField()

    use_region = BooleanField('Region')
    region = SelectField(choices=[('global', 'FMK (global)'), ('ru', 'ГМД (ру)')])

    use_store = BooleanField('Store')
    included_stores = TextAreaField()
    excluded_stores = TextAreaField()

    use_price_groups = BooleanField('Price groups')
    price_groups = TextAreaField()

    use_purchases_status = BooleanField('Purchases status')
    active_subscription = BooleanField('Subscription')
    active_minutes = BooleanField('Minutes')

    use_license_status = BooleanField('License accept status')
    license_status = BooleanField('Licence accepded')

    use_ipc = BooleanField('Include IPCs')
    ipc = TextAreaField()

    use_excluded_ipc = BooleanField('Exclude IPCs')
    excluded_ipc = TextAreaField()

    use_mcc = BooleanField('Include MCCs')
    mcc = TextAreaField()

    use_excluded_mcc = BooleanField('Exclude MCCs')
    excluded_mcc = TextAreaField()

    use_locales = BooleanField('Include locales')
    locales = TextAreaField()

    use_excluded_locales = BooleanField('Exclude locales')
    excluded_locales = TextAreaField()

    # division config fields
    hash_type = SelectField(
        'Hash type',
        choices=[('crc32', 'CRC-32')],
        validators=[DataRequired()]
    )
    use_uid = BooleanField('Use uid')
    salt = StringField('Salt', validators=[DataRequired()])
    remainder_number = IntegerField(
        'Remainder number',
        validators=[DataRequired(), NumberRange(min=2)]
    )

    # groups config fields
    group_name_1 = \
        StringField('Name', validators=[DataRequired()])
    greater_than_or_equal_to_percent_1 = \
        IntegerField('from', validators=[DataRequired()])
    less_than_or_equal_to_percent_1 = \
        IntegerField('to', validators=[DataRequired()])

    group_name_2 = StringField('Name')
    greater_than_or_equal_to_percent_2 = IntegerField('from')
    less_than_or_equal_to_percent_2 = IntegerField('to')
