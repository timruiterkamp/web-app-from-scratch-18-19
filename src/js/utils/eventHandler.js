import Component from "../lib/component";
import ErrorTemplate from "../views/Error";
import LoadingTemplate from "../views/Loading";

export default class eventHandler extends Component {
  constructor(props) {
    super(props);
    this.w = this.dom.write;
  }

  loading(container, message) {
    const loadingPage = new LoadingTemplate();
    loadingPage.render();
    console.log("loading");
  }

  async error(error, message) {
    console.log(error, message);
    const errorPage = new ErrorTemplate();
    await errorPage.render(error, message);
    await errorPage.after_render();
  }
}
