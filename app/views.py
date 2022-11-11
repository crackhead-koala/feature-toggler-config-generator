from flask import Blueprint, render_template, request

from .forms import ConfigForm
from .functions import json_serialieze_form_data


views = Blueprint('views', __name__)


@views.route('/', methods=['GET', 'POST'])
def form() -> str:
    form = ConfigForm()
    return render_template('form.html', form=form)


@views.route('/create_config', methods=['POST'])
def create_config() -> str:
    if request.method == 'POST':
        return json_serialieze_form_data(request.form)
