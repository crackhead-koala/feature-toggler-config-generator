// Get all optional fields toggles
var alwaysActiveForIDsCheckbox = $('#use-always-active-for-ids');
var alwaysActiveForIDsWrapper = $('#always-active-for-ids-wrapper');

var firstInstallVersionCheckbox = $('#use-first-install');
var firstInstallVersionWrapper = $('#first-install-wrapper');

var minimalAppVersionCheckbox = $('#use-minimal-app-version');
var minimalAppVersionWrapper = $('#minimal-app-version-wrapper');

var regionCheckbox = $('#use-region');
var regionWrapper = $('#region-wrapper');

var storeCheckbox = $('#use-store');
var storeWrapper = $('#store-wrapper');

var priceGroupsCheckbox = $('#use-price-groups');
var priceGroupsWrapper = $('#price-groups-wrapper');

var purchasesStatusCheckbox = $('#use-purchases-status');
var purchasesStatusWrapper = $('#purchases-status-wrapper');

var licenseStatusCheckbox = $('#use-license-status');
var licenseStatusWrapper = $('#license-status-wrapper');

var ipcCheckbox = $('#use-ipc');
var ipcWrapper = $('#ipc-wrapper');

var excludedIpcCheckbox = $('#use-excluded-ipc');
var excludedIpcWrapper = $('#excluded-ipc-wrapper');

var mccCheckbox = $('#use-mcc');
var mccWrapper = $('#mcc-wrapper');

var excludedMccCheckbox = $('#use-excluded-mcc');
var excludedMccWrapper = $('#excluded-mcc-wrapper');

var localesCheckbox = $('#use-locales');
var localesWrapper = $('#locales-wrapper');

var excludedLocalesCheckbox = $('#use-excluded-locales');
var excludedLocalesWrapper = $('#excluded-locales-wrapper');


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
            alwaysActiveForIDsWrapper.addClass('d-none');
        });
    }
});

firstInstallVersionCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        firstInstallVersionWrapper.removeClass('d-none');
        firstInstallVersionWrapper.show(200);
    } else {
        firstInstallVersionWrapper.hide(200, function () {
            firstInstallVersionWrapper.addClass('d-none');
        });
    }
});

minimalAppVersionCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        minimalAppVersionWrapper.removeClass('d-none');
        minimalAppVersionWrapper.show(200);
    } else {
        minimalAppVersionWrapper.hide(200, function () {
            minimalAppVersionWrapper.addClass('d-none');
        });
    }
});

regionCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        regionWrapper.removeClass('d-none');
        regionWrapper.show(200);
    } else {
        regionWrapper.hide(200, function () {
            regionWrapper.addClass('d-none');
        });
    }
});

storeCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        storeWrapper.removeClass('d-none');
        storeWrapper.show(200);
    } else {
        storeWrapper.hide(200, function () {
            storeWrapper.addClass('d-none');
        });
    }
});

priceGroupsCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        priceGroupsWrapper.removeClass('d-none');
        priceGroupsWrapper.show(200);
    } else {
        priceGroupsWrapper.hide(200, function () {
            priceGroupsWrapper.addClass('d-none');
        });
    }
});

purchasesStatusCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        purchasesStatusWrapper.removeClass('d-none');
        purchasesStatusWrapper.show(200);
    } else {
        purchasesStatusWrapper.hide(200, function () {
            purchasesStatusWrapper.addClass('d-none');
        });
    }
});

licenseStatusCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        licenseStatusWrapper.removeClass('d-none');
        licenseStatusWrapper.show(200);
    } else {
        licenseStatusWrapper.hide(200, function () {
            licenseStatusWrapper.addClass('d-none');
        });
    }
});

ipcCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        ipcWrapper.removeClass('d-none');
        ipcWrapper.show(200);
    } else {
        ipcWrapper.hide(200, function () {
            ipcWrapper.addClass('d-none');
        });
    }
});

excludedIpcCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        excludedIpcWrapper.removeClass('d-none');
        excludedIpcWrapper.show(200);
    } else {
        excludedIpcWrapper.hide(200, function () {
            excludedIpcWrapper.addClass('d-none');
        });
    }
});

mccCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        mccWrapper.removeClass('d-none');
        mccWrapper.show(200);
    } else {
        mccWrapper.hide(200, function () {
            mccWrapper.addClass('d-none');
        });
    }
});

excludedMccCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        excludedMccWrapper.removeClass('d-none');
        excludedMccWrapper.show(200);
    } else {
        excludedMccWrapper.hide(200, function () {
            excludedMccWrapper.addClass('d-none');
        });
    }
});

localesCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        localesWrapper.removeClass('d-none');
        localesWrapper.show(200);
    } else {
        localesWrapper.hide(200, function () {
            localesWrapper.addClass('d-none');
        });
    }
});

excludedLocalesCheckbox.on('click', function () {
    if ($(this).is(':checked')) {
        excludedLocalesWrapper.removeClass('d-none');
        excludedLocalesWrapper.show(200);
    } else {
        excludedLocalesWrapper.hide(200, function () {
            excludedLocalesWrapper.addClass('d-none');
        });
    }
});
