from flask import Blueprint, render_template


views = Blueprint('views', __name__)


@views.route('/', methods=['GET', 'POST'])
def main() -> str:
    return render_template('main.html')


@views.route('/tmp', methods=['GET', 'POST'])
def tmp() -> str:
    return render_template('tmp.html')
