from flask import Blueprint, render_template, request

from .forms import ConfigForm
from .functions import json_serialieze_form_data


views = Blueprint('views', __name__)


@views.route('/', methods=['GET', 'POST'])
def form() -> str:
    form = ConfigForm()
    # if form.validate_on_submit():
    #     config_json = json_serialieze_form_data(form)
    #     return render_template('form.html', form=form, config_json=config_json)
    return render_template('form.html', form=form)


@views.route('/create_config', methods=['POST'])
def create_config() -> str:
    if request.method == 'POST':
        return json_serialieze_form_data(request.form)


@views.route('/tmp', methods=['GET', 'POST'])
def tmp() -> str:
    return render_template('tmp.html')
