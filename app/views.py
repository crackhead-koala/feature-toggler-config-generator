from flask import Blueprint, render_template

from .forms import ConfigForm
from .functions import parse_form_into_json


views = Blueprint('views', __name__)


@views.route('/', methods=['GET', 'POST'])
def form() -> str:
    form = ConfigForm()

    if form.validate_on_submit():
        # form_json = parse_form_into_json(form)
        # return render_template('config.html', form_json=form_json)
        return render_template('config.html')

    return render_template('form.html', form=form)


@views.route('/config')
def config() -> str:
    return render_template('config.html')


@views.route('/tmp', methods=['GET', 'POST'])
def tmp() -> str:
    return render_template('tmp.html')
