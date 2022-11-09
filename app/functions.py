import json
from werkzeug.datastructures import ImmutableMultiDict


def json_serialieze_form_data(form: ImmutableMultiDict) -> str:
    feature_name = form['feature_name']

    # create dict with required options
    config_dict = {
        feature_name: {
            'feature': feature_name,
            'rule': 'experiment.Rule',
            'ruleOptions':{
                'enabled': bool(form.get('enabled')),
                'is_active': bool(form.get('is_active')),
                'distribution_event': form['distribution_event']
            }
        }
    }


    # parse optional rules
    if 'use_always_enabled_for_ids' in form:
        config_dict[feature_name]['ruleOptions']['always_enabled_for_ids'] = [
            int(user_id.strip())
            for user_id
            in form['always_enabled_for_ids'].split(',')
        ]

    if 'use_first_install' in form:
        config_dict[feature_name]['ruleOptions']['first_install'] = \
            form['first_install']

    if 'use_minimal_app_version' in form:
        config_dict[feature_name]['ruleOptions']['minimal_app_version'] = \
            int(form['minimal_app_version'])

    if 'use_region' in form:
        config_dict[feature_name]['ruleOptions']['region'] = form['region']

    if 'use_store' in form:
        stores = {}

        if (included_stores := form.get('included_stores')):
            stores.update(
                {pi.strip(): True for pi in included_stores.split(',')}
            )

        if (excluded_stores := form.get('excluded_stores')):
            stores.update(
                {pi.strip(): False for pi in excluded_stores.split(',')}
            )

        config_dict[feature_name]['ruleOptions']['store'] = stores

    if 'use_price_groups' in form:
        config_dict[feature_name]['ruleOptions']['price_groups'] = \
            {int(pg.strip()): True for pg in form['price_groups'].split(',')}

    if 'use_purchases_status' in form:
        config_dict[feature_name]['ruleOptions']['active_subscription'] = \
            bool(form.get('active_subscription'))
        config_dict[feature_name]['ruleOptions']['active_minutes'] = \
            bool(form.get('active_minutes'))

    if 'use_license_status' in form:
        config_dict[feature_name]['ruleOptions']['license_accept'] = \
            bool(form.get('license_status'))

    if 'use_ipc' in form:
        config_dict[feature_name]['ruleOptions']['ipc'] = \
            {ipc.strip(): True for ipc in form['ipc'].split(',')}

    if 'use_excluded_ipc' in form:
        config_dict[feature_name]['ruleOptions']['excluded_ipc'] = \
            {ipc.strip(): True for ipc in form['excluded_ipc'].split(',')}

    if 'use_mcc' in form:
        config_dict[feature_name]['ruleOptions']['mcc'] = \
            {int(mcc.strip()): True for mcc in form['mcc'].split(',')}

    if 'use_excluded_mcc' in form:
        config_dict[feature_name]['ruleOptions']['excluded_mcc'] = \
            {int(mcc.strip()): True for mcc in form['excluded_mcc'].split(',')}

    if 'use_locales' in form:
        config_dict[feature_name]['ruleOptions']['locales'] = \
            {al.strip(): True for al in form['locales'].split(',')}

    if 'use_excluded_locales' in form:
        config_dict[feature_name]['ruleOptions']['excluded_locales'] = \
            {al.strip(): True for al in form['excluded_locales'].split(',')}


    # parse division config
    config_dict[feature_name]['ruleOptions']['division_config'] = {
        'hash_type': form['hash_type'],
        'use_uid': bool(form.get('use_uid')),
        'salt': form['salt'],
        'remainder_number': int(form['remainder_number'])
    }


    # parse group config
    config_dict[feature_name]['ruleOptions']['groups'] = {
        form['group_name_1']: {
            'greater_than_or_equal_to_percent':
                int(form['greater_than_or_equal_to_percent_1']),
            'less_than_or_equal_to_percent':
                int(form['less_than_or_equal_to_percent_1'])
        },
        form['group_name_2']: {
            'greater_than_or_equal_to_percent':
                int(form['greater_than_or_equal_to_percent_2']),
            'less_than_or_equal_to_percent':
                int(form['less_than_or_equal_to_percent_2'])
        }
    }

    return json.dumps(config_dict, indent=2)
