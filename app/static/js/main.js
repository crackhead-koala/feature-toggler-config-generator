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
alwaysActiveForIDsCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        alwaysActiveForIDsWrapper.removeClass('d-none');
        alwaysActiveForIDsWrapper.show(200);
    } else {
        alwaysActiveForIDsWrapper.hide(200, function () {
            $(this).addClass('d-none');
        });
    }
});

firstInstallVersionCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        firstInstallVersionWrapper.removeClass('d-none');
        firstInstallVersionWrapper.show(200);
    } else {
        firstInstallVersionWrapper.hide(200, function () {
            $(this).addClass('d-none');
        });
    }
});

minimalAppVersionCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        minimalAppVersionWrapper.removeClass('d-none');
        minimalAppVersionWrapper.show(200);
    } else {
        minimalAppVersionWrapper.hide(200, function () {
            $(this).addClass('d-none');
        });
    }
});

regionCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        regionWrapper.removeClass('d-none');
        regionWrapper.show(200);
    } else {
        regionWrapper.hide(200, function () {
            $(this).addClass('d-none');
        });
    }
});

storeCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        storeWrapper.removeClass('d-none');
        storeWrapper.show(200);
    } else {
        storeWrapper.hide(200, function () {
            $(this).addClass('d-none');
        });
    }
});

priceGroupsCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        priceGroupsWrapper.removeClass('d-none');
        priceGroupsWrapper.show(200);
    } else {
        priceGroupsWrapper.hide(200, function () {
            $(this).addClass('d-none');
        });
    }
});

purchasesStatusCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        purchasesStatusWrapper.removeClass('d-none');
        purchasesStatusWrapper.show(200);
    } else {
        purchasesStatusWrapper.hide(200, function () {
            $(this).addClass('d-none');
        });
    }
});

licenseStatusCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        licenseStatusWrapper.removeClass('d-none');
        licenseStatusWrapper.show(200);
    } else {
        licenseStatusWrapper.hide(200, function () {
            $(this).addClass('d-none');
        });
    }
});

ipcCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        ipcWrapper.removeClass('d-none');
        ipcWrapper.show(200);
    } else {
        ipcWrapper.hide(200, function () {
            $(this).addClass('d-none');
        });
    }
});

excludedIpcCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        excludedIpcWrapper.removeClass('d-none');
        excludedIpcWrapper.show(200);
    } else {
        excludedIpcWrapper.hide(200, function () {
            $(this).addClass('d-none');
        });
    }
});

mccCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        mccWrapper.removeClass('d-none');
        mccWrapper.show(200);
    } else {
        mccWrapper.hide(200, function () {
            $(this).addClass('d-none');
        });
    }
});

excludedMccCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        excludedMccWrapper.removeClass('d-none');
        excludedMccWrapper.show(200);
    } else {
        excludedMccWrapper.hide(200, function () {
            $(this).addClass('d-none');
        });
    }
});

localesCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        localesWrapper.removeClass('d-none');
        localesWrapper.show(200);
    } else {
        localesWrapper.hide(200, function () {
            $(this).addClass('d-none');
        });
    }
});

excludedLocalesCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        excludedLocalesWrapper.removeClass('d-none');
        excludedLocalesWrapper.show(200);
    } else {
        excludedLocalesWrapper.hide(200, function () {
            $(this).addClass('d-none');
        });
    }
});
