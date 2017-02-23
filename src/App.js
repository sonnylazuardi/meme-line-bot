import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png';
import phone from './images/phone.png';
import demo from './images/demo.gif';
import exponentlogo from './images/exponentlogo.png';
import qrcode from './images/qrcode.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="container">
            <div className="logo-wrapper">
              <img src={logo} className="logo-image" />
            </div>

            <div className="row" className="header-content">
              <div className="col-md-6">
                <div className="phone-wrapper">
                  <div className="demo-wrapper">
                    <img src={demo} className="demo-image" />
                  </div>
                  <img src={phone} className="phone-image" />
                </div>
              </div>
              <div className="col-md-6">
                
                <h1>
                  <div>CREATE MEME</div>
                  <div className="small1">RIGHT IN YOUR</div>
                  <div className="small2">LINE CHAT APP</div>
                </h1>

                <div href="#" style={{margin: 10}}>
                    scan qr code to add friend
                </div>

                <img alt="" src={qrcode} />

                <div>
                    <a href="https://line.me/R/ti/p/%40zob7817f">
                        <img height="36" border="0" alt="Tambah Teman" src="https://scdn.line-apps.com/n/line_add_friends/btn/en.png" />
                    </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="content-inverse">
          <div className="container">
            <h1>Created By</h1>
            <div className="row">
              
              <div className="col-md-4">
                <div className="avatar">
                  <div><img src="https://avatars2.githubusercontent.com/u/856609?v=3&s=200" /></div>
                  <a className="github-button" href="https://github.com/sonnylazuardi" data-style="mega" data-count-href="/sonnylazuardi/followers" data-count-api="/users/sonnylazuardi#followers" data-count-aria-label="# followers on GitHub" aria-label="Follow @sonnylazuardi on GitHub">Follow @sonnylazuardi</a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="avatar">
                  <div><img src="https://avatars1.githubusercontent.com/u/3748658?v=3&s=200" /></div>
                  <a className="github-button" href="https://github.com/mathdroid" data-style="mega" data-count-href="/mathdroid/followers" data-count-api="/users/mathdroid#followers" data-count-aria-label="# followers on GitHub" aria-label="Follow @mathdroid on GitHub">Follow @mathdroid</a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="avatar">
                  <div><img src="https://avatars2.githubusercontent.com/u/1267147?v=3&s=200" /></div>
                  <a className="github-button" href="https://github.com/ka13ar" data-style="mega" data-count-href="/ka13ar/followers" data-count-api="/users/ka13ar#followers" data-count-aria-label="# followers on GitHub" aria-label="Follow @ka13ar on GitHub">Follow @ka13ar</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
