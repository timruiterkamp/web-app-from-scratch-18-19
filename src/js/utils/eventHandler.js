import Component from "../lib/component";

export default class eventHandler extends Component {
  constructor(props) {
    super(props);
    this.w = this.dom.write;
  }

  loading() {
    const body = document.querySelector("body");

    console.log("loading");
  }
}
