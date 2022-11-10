// Get all optional fields toggles
let alwaysActiveForIDsCheckbox = $('#use_always_enabled_for_ids');
let alwaysActiveForIDsWrapper = $('#always_enabled_for_ids_wrapper');

let firstInstallVersionCheckbox = $('#use_first_install');
let firstInstallVersionWrapper = $('#first_install_wrapper');

let minimalAppVersionCheckbox = $('#use_minimal_app_version');
let minimalAppVersionWrapper = $('#minimal_app_version_wrapper');

let regionCheckbox = $('#use_region');
let regionWrapper = $('#region_wrapper');

let storeCheckbox = $('#use_store');
let storeWrapper = $('#store_wrapper');

let priceGroupsCheckbox = $('#use_price_groups');
let priceGroupsWrapper = $('#price_groups_wrapper');

let purchasesStatusCheckbox = $('#use_purchases_status');
let purchasesStatusWrapper = $('#purchases_status_wrapper');

let licenseStatusCheckbox = $('#use_license_status');
let licenseStatusWrapper = $('#license_status_wrapper');

let ipcCheckbox = $('#use_ipc');
let ipcWrapper = $('#ipc_wrapper');

let excludedIpcCheckbox = $('#use_excluded_ipc');
let excludedIpcWrapper = $('#excluded_ipc_wrapper');

let mccCheckbox = $('#use_mcc');
let mccWrapper = $('#mcc_wrapper');

let excludedMccCheckbox = $('#use_excluded_mcc');
let excludedMccWrapper = $('#excluded_mcc_wrapper');

let localesCheckbox = $('#use_locales');
let localesWrapper = $('#locales_wrapper');

let excludedLocalesCheckbox = $('#use_excluded_locales');
let excludedLocalesWrapper = $('#excluded_locales_wrapper');


// Hide input areas for optinal fields by default
alwaysActiveForIDsWrapper.hide();
firstInstallVersionWrapper.hide();
minimalAppVersionWrapper.hide();
regionWrapper.hide();
storeWrapper.hide();
priceGroupsWrapper.hide();
purchasesStatusWrapper.hide();
licenseStatusWrapper.hide();
ipcWrapper.hide();
excludedIpcWrapper.hide();
mccWrapper.hide();
excludedMccWrapper.hide();
localesWrapper.hide();
excludedLocalesWrapper.hide();


// Add event listeners
alwaysActiveForIDsCheckbox.on('click', () => {
    if (alwaysActiveForIDsCheckbox.is(':checked')) {
        alwaysActiveForIDsWrapper.removeClass('d-none');
        alwaysActiveForIDsWrapper.show(200);
    } else {
        alwaysActiveForIDsWrapper.hide(200, () => {
            alwaysActiveForIDsWrapper.addClass('d-none');
        });
    }
});

firstInstallVersionCheckbox.on('click', () => {
    if (firstInstallVersionCheckbox.is(':checked')) {
        firstInstallVersionWrapper.removeClass('d-none');
        firstInstallVersionWrapper.show(200);
    } else {
        firstInstallVersionWrapper.hide(200, () => {
            firstInstallVersionWrapper.addClass('d-none');
        });
    }
});

minimalAppVersionCheckbox.on('click', () => {
    if (minimalAppVersionCheckbox.is(':checked')) {
        minimalAppVersionWrapper.removeClass('d-none');
        minimalAppVersionWrapper.show(200);
    } else {
        minimalAppVersionWrapper.hide(200, () => {
            minimalAppVersionWrapper.addClass('d-none');
        });
    }
});

regionCheckbox.on('click', () => {
    if (regionCheckbox.is(':checked')) {
        regionWrapper.removeClass('d-none');
        regionWrapper.show(200);
    } else {
        regionWrapper.hide(200, () => {
            regionWrapper.addClass('d-none');
        });
    }
});

storeCheckbox.on('click', () => {
    if (storeCheckbox.is(':checked')) {
        storeWrapper.removeClass('d-none');
        storeWrapper.show(200);
    } else {
        storeWrapper.hide(200, () => {
            storeWrapper.addClass('d-none');
        });
    }
});

priceGroupsCheckbox.on('click', () => {
    if (priceGroupsCheckbox.is(':checked')) {
        priceGroupsWrapper.removeClass('d-none');
        priceGroupsWrapper.show(200);
    } else {
        priceGroupsWrapper.hide(200, () => {
            priceGroupsWrapper.addClass('d-none');
        });
    }
});

purchasesStatusCheckbox.on('click', () => {
    if (purchasesStatusCheckbox.is(':checked')) {
        purchasesStatusWrapper.removeClass('d-none');
        purchasesStatusWrapper.show(200);
    } else {
        purchasesStatusWrapper.hide(200, () => {
            purchasesStatusWrapper.addClass('d-none');
        });
    }
});

licenseStatusCheckbox.on('click', () => {
    if (licenseStatusCheckbox.is(':checked')) {
        licenseStatusWrapper.removeClass('d-none');
        licenseStatusWrapper.show(200);
    } else {
        licenseStatusWrapper.hide(200, () => {
            licenseStatusWrapper.addClass('d-none');
        });
    }
});

ipcCheckbox.on('click', () => {
    if (ipcCheckbox.is(':checked')) {
        ipcWrapper.removeClass('d-none');
        ipcWrapper.show(200);
    } else {
        ipcWrapper.hide(200, () => {
            ipcWrapper.addClass('d-none');
        });
    }
});

excludedIpcCheckbox.on('click', () => {
    if (excludedIpcCheckbox.is(':checked')) {
        excludedIpcWrapper.removeClass('d-none');
        excludedIpcWrapper.show(200);
    } else {
        excludedIpcWrapper.hide(200, () => {
            excludedIpcWrapper.addClass('d-none');
        });
    }
});

mccCheckbox.on('click', () => {
    if (mccCheckbox.is(':checked')) {
        mccWrapper.removeClass('d-none');
        mccWrapper.show(200);
    } else {
        mccWrapper.hide(200, () => {
            mccWrapper.addClass('d-none');
        });
    }
});

excludedMccCheckbox.on('click', () => {
    if (excludedMccCheckbox.is(':checked')) {
        excludedMccWrapper.removeClass('d-none');
        excludedMccWrapper.show(200);
    } else {
        excludedMccWrapper.hide(200, () => {
            excludedMccWrapper.addClass('d-none');
        });
    }
});

localesCheckbox.on('click', () => {
    if (localesCheckbox.is(':checked')) {
        localesWrapper.removeClass('d-none');
        localesWrapper.show(200);
    } else {
        localesWrapper.hide(200, () => {
            localesWrapper.addClass('d-none');
        });
    }
});

excludedLocalesCheckbox.on('click', () => {
    if (excludedLocalesCheckbox.is(':checked')) {
        excludedLocalesWrapper.removeClass('d-none');
        excludedLocalesWrapper.show(200);
    } else {
        excludedLocalesWrapper.hide(200, () => {
            excludedLocalesWrapper.addClass('d-none');
        });
    }
});


// Send form data to backend
function serializeFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

$('#submit-form').on('click', (event) => {
    event.preventDefault();

    $.ajax({
        data : serializeFormData($('form')),
        type : 'POST',
        url : '/create_config'
    }).done((data) => {
        $('#config-json').text(data);
    }).done(() => {
        hljs.highlightElement($('#config-json').get(0));
    });

});


// Copy to clipboard button
let copyTooltip = new bootstrap.Tooltip($('#copy-config-json'), {
    title: 'Copied',
    placement : 'top',
    trigger : 'manual'
});

async function copyContent(element) {
    try {
        await navigator.clipboard.writeText(element.text());
    } catch (err) {
        alert('Failed to copy: ', err);
    }
}

$('#copy-config-json').on('click', () => {
    copyContent($('#config-json'));
    copyTooltip.show();
    setTimeout(() => {
        $('#copy-config-json').tooltip('hide');
    }, 1000);
});
