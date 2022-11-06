from flask import Blueprint, render_template

from .forms import ConfigForm


views = Blueprint('views', __name__)


@views.route('/', methods=['GET', 'POST'])
def main() -> str:
    form = ConfigForm()
    return render_template('main.html', form=form)


@views.route('/tmp', methods=['GET', 'POST'])
def tmp() -> str:
    return render_template('tmp.html')
