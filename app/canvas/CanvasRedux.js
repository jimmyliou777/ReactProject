import React, { Component } from 'react';
import { utils, RotationToMouse } from './utils';
import { Ball } from './ball';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Increment, Decrement, Init } from '../actions/canvasAction';
import { Unmount } from '../actions/canvasAction';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.drawFrame = this.drawFrame.bind(this);
        this.ctx;
        this.ball = new Ball();
        this.state = {
            count: 0,
            unmount: false
        };
    }
    //conmponent Will Unmount
    componentWillUnmount() {
        console.log('componentWillUnmount-canvas');
        console.log('this.props.unmount:' + this.props.unmount);
    }
    //before render
    componentWillMount() {
        console.log('componentWillMount-canvas');
    }

    //after render
    componentDidMount() {
        console.log('componentDidMount-canvas');
        console.log('this.props.unmount:' + this.props.unmount);
        this.initCanvas();
        this.drawFrame();
    }

    drawFrame() {
        window.requestAnimationFrame(this.drawFrame);
        this.ctx.clearRect(0, 0, this.canW, this.canH);
        //console.log('mouseX:' + this.mouse.x + '-mouseY:' + this.mouse.y);
        for (let j = 0; j < this.num; j++) {
            if (j !== 0) {
                this.vx = (this.ballArr[j - 1].x - this.ballArr[j].x) * (this.ease + this.easeDist * j);
                this.vy = (this.ballArr[j - 1].y - this.ballArr[j].y) * (this.ease + this.easeDist * j);
            } else {
                this.vx = (this.mouse.x - this.ballArr[j].x) * (this.ease + this.easeDist * j);
                this.vy = (this.mouse.y - this.ballArr[j].y) * (this.ease + this.easeDist * j);
                this.Balls.forEach(this.draw);
            }

            this.ballArr[j].x += this.vx;
            this.ballArr[j].y += this.vy;
            this.ballArr[j].draw(this.ctx);
        }



    // ball.x += vx;
    // ball.y += vy;
    // ball.draw(ctx);
    }
    initCanvas() {
        console.log('init');
        if (this.canvas !== null) {
            this.ctx = this.canvas.getContext('2d');
            this.ball.draw(this.ctx);
            this.mouse = utils.captureMouse(this.canvas);
            this.canW = this.canvas.width;
            this.canH = this.canvas.height;
            this.radius = 25;
            this.ballArr = [];
            this.num = 3;
            this.dist = 10;
            this.vx = 0;
            this.vy = 0;
            this.ease = 0.1;
            this.easeDist = 0.05;
            this.targetX = 0;
            this.TargetY = 0;
            //radom balls
            this.Balls = [];
            this.count = 50;
            for (let i = 0; i < this.count; i++) {
                let size = Math.random() * 20 + 5;
                let color = Math.random() * (0xffffff);
                let ball_rand = new Ball(size, color);

                ball_rand.id = "ball_" + i;
                ball_rand.radius = Math.random() * 20 + 10;
                ball_rand.x = Math.random() * this.canW;
                ball_rand.y = Math.random() * this.canH;
                ball_rand.vx = Math.random() * 2 - 1;
                ball_rand.vy = Math.random() * 2 - 1;

                this.Balls.push(ball_rand);
            }

            for (let i = 0; i < this.num; i++) {
                let ball = new Ball(this.radius - i * 5, Math.random() * (0x00ff00));
                ball.x = this.canW / 2;
                ball.y = this.canH / 2;
                ball.draw(this.ctx);
                this.ballArr.push(ball);
            }
            this.draw = draw;
            this.draw = this.draw.bind(this);

            function draw(ball, pos) {
                ball.x += ball.vx;
                ball.y += ball.vy;
                if (ball.x - ball.radius > this.canW ||
                        ball.radius + ball.x < 0 ||
                        ball.y - ball.radius > this.canH ||
                        ball.y + ball.radius < 0) {

                    ball.x = this.canW / 2;
                    ball.y = this.canH;
                    ball.vx = Math.random() * (2) - 1;
                    ball.vy = Math.random() * (-2) - 1;
                } else {

                    let dx = this.ballArr[0].x - ball.x;
                    let dy = this.ballArr[0].y - ball.y;
                    let dists = Math.sqrt(dx * dx + dy * dy);
                    //console.log(dists);
                    if ((ball.radius + this.ballArr[0].radius) > dists) {

                        ball.x = this.canW * Math.random();
                        ball.y = this.canH;
                        ball.vx = Math.random() * (2) - 1;
                        ball.vy = Math.random() * (-2) - 1;
                        //console.log('Ballb.y:' + ballArr[0].y + '-->ball.y:' + ball.y);
                        //console.log(dists + '-raduis:' + (ball.radius + ballArr[0].radius));

                        // this.setState({
                        //     count: this.state.count + 1,
                        // });
                        this.props.actions.Increment();
                    }
                }
                ball.draw(this.ctx);

            }

        }
    }
    handleClick(e) {
        e.preventDefault();
        // this.setState({
        //     count: 0,
        // });
        this.props.actions.Init();
    }
    render() {
        const divStyle = {
            width: '100%',
            height: 'auto',
            margin: '0 auto',
        };
        if (this.props.unmount) {

        } else {

        }
        return (
            <div className="block canvasbBlock"><div className="canvas" style={divStyle}>
                <div>
                   <h1>Canvas Game</h1>
                   <p style={{
                color: 'black'
            }}>{this.props.index}</p>
                   <Button bsStyle="success" onClick={this.handleClick} style={{
                'marginBottom': '10px'
            }}>更新</Button>
                </div>
                <div style={{
                'marginBottom': '50px',
                'width': '100%'
            }}>
                  <canvas id="canvas" ref={(ref) => this.canvas = ref} width={500} height={500} style={{
                'backgroundColor': '#000'
            }}></canvas>
                </div>
                </div></div>
        )
    }
}

//只專注特定屬性
function mapStateToProps(state) {
    return {
        index: state.Counter.index,
        unmount: state.canvasUnmount.unmount,
    }
}

//mapDispatchToProps的作用是把store中的dispatch方法注入给组件 == store.dispatch
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            Increment: Increment,
            Decrement: Decrement,
            Init: Init,
            Unmount: Unmount,
        }, dispatch)

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Canvas);