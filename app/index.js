var USER_DATA = {
  name: 'Natalia Polishchuk',
  username: 'natapoli90',
  image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAdTAAAAJGNmYmMxMDBjLTI1NWYtNDU0Zi1hYWRkLTc4ZjViNTQwOGJjMQ.jpg'
};

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} />
  }
});

var Link = React.createClass({
  changeUrl: function () {
    window.location.replace(this.props.href)
  },
  render: function () {
    return (
      <span
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeUrl}>
        {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <Link href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function () {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
