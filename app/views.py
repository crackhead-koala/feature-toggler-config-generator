from flask import Blueprint, render_template, request

from .forms import ConfigForm
from .functions import json_serialieze_from_data


views = Blueprint('views', __name__)


@views.route('/', methods=['GET', 'POST'])
def form() -> str:
    form = ConfigForm()
    return render_template('form.html', form=form)


@views.route('/config', methods=['GET', 'POST'])
def config() -> str:
    if request.method == 'POST':
        form = request.form
        print(form)
        return render_template(
            'config.html',
            config_json=json_serialieze_from_data(form)
        )


@views.route('/tmp', methods=['GET', 'POST'])
def tmp() -> str:
    return render_template('tmp.html')
