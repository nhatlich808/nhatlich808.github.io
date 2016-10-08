var App = React.createClass({
  render() {
    return(
      <div>
      Hello world ! <input type="text" placeholder="Your name here..." />
      <br/>It's {this.props.date.toTimeString()}
      </div>
    );
  }
});
function tick() {
  ReactDOM.render(<App date={ new Date()} />, document.getElementById('app'));
}
setInterval(tick, 500);
