from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, SelectField, IntegerField
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
    always_enabled_for_ids = StringField(description='Ender ID here...')

    use_first_install = BooleanField('First install version')
    first_install = StringField()

    use_minimal_app_version = BooleanField('Minimal app version')
    minimal_app_version = StringField()

    use_region = BooleanField('Region')
    region = SelectField(choices=[('global', 'FMK Global'), ('ru', 'GMD Ru')])

    use_store = BooleanField('Store')
    store = StringField(description='Enter store PI here...')

    use_price_group = BooleanField('Price groups')
    price_group = StringField(description='Enter price group here...')

    use_purchases_status = BooleanField('Purchases status')
    active_subscription = BooleanField('Subscription')
    active_minutes = BooleanField('Minutes')

    use_license_accept = BooleanField('License accept status')
    license_accept = BooleanField('Licence accepded')

    use_ipc = BooleanField()
    ipc = StringField(description='Enter IPC here...')

    use_excluded_ipc = BooleanField()
    excluded_ipc = StringField(description='Enter IPC here...')

    use_mcc = BooleanField()
    mcc = StringField(description='Enter MCC code here...')

    use_excluded_mcc = BooleanField()
    excluded_mcc = StringField(description='Enter MCC code here...')

    use_locales = BooleanField()
    locales = StringField(description='Enter locale here...')

    use_excluded_locales = BooleanField()
    excluded_locales = StringField(description='Enter locale here...')

    # distribution config fields
    hash_type = SelectField('Hash type', choices=[('crc32', 'crc32')], validators=[DataRequired()])
    use_uid = BooleanField('Use uid')
    salt = StringField('Salt', validators=[DataRequired()])
    remainder_number = \
        IntegerField('Remainder number', validators=[NumberRange(min=2)])

    # groups config fields
    greater_than_or_equal_to_percent = IntegerField()
    less_than_or_equal_to_percent = IntegerField()
    starting_from_user_id = IntegerField()
    ending_by_user_id = IntegerField()
