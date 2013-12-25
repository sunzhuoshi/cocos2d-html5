/**
 * @fileoverview Java Script Builtins for windows properties.
 *
 * @externs
 */
 
 /**
 * @see https://cocos2d-x.org
 */
 
/**
 * cocos2d-html5-only.
 * @type {string}
 */
CSSProperties.prototype._super;

/**
 * cocos2d-html5-only.
 * @type {string}
 */
CSSProperties.prototype.Inflate;

/**
 * cocos2d-html5-only.
 * @type {string}
 */
CSSProperties.prototype.decompress;

/**
 * Accelerometer api
 * cocos2d-html5-only.
 * @type {string}
 */
CSSProperties.prototype.DeviceOrientationEvent;
CSSProperties.prototype.DeviceMotionEvent;
CSSProperties.prototype.accelerationIncludingGravity;
CSSProperties.prototype.gamma;
CSSProperties.prototype.beta;
CSSProperties.prototype.alpha;

CSSProperties.prototype.onDidLoadFromCCB;
CSSProperties.prototype.animationManager;

// system APIs
var gl = {};
var sys = {};
sys.capabilities;

var cc = {};

cc.CONTROL_EVENT_TOUCH_DRAG_INSIDE;
cc.CONTROL_EVENT_TOUCH_UP_INSIDE;

cc.TEXT_ALIGNMENT_CENTER;
cc.TEXT_ALIGNMENT_RIGHT;

cc.TOUCH_ONE_BY_ONE;

cc.VERTICAL_TEXT_ALIGNMENT_CENTER;
cc.VERTICAL_TEXT_ALIGNMENT_TOP;

// colors
cc.BLACK;
cc.BLUE;
cc.GREEN;
cc.MAGENTA;
cc.RED;
cc.WHITE;
cc.YELLOW;

// cc utility methods
cc.log = function(message){};
cc.pointEqualToPoint = function(point1, point2){};

cc.ActionInterval = function(){};
cc.ActionInterval.reverse = function(){};

cc.Assert = function(condition){};

cc.AudioEngine = function(){};
cc.AudioEngine.getInstance = function(){};
cc.AudioEngine.prototype.playEffect = function(effect, loop){};
cc.AudioEngine.prototype.playMusic = function(music, loop){};
cc.AudioEngine.prototype.stopMusic = function(music){};

cc.BezierTo = function(){};
cc.BezierTo.create = function(duration, points){};

cc.BuilderAnimationManager = function(){};
cc.BuilderAnimationManager.prototype.setCompletedAnimationCallback = function(target, callback){};
cc.BuilderAnimationManager.prototype.getRunningSequenceName = function(){};
cc.BuilderAnimationManager.prototype.runAnimationsForSequenceNamed = function(sequenceName){};

cc.BuilderReader = function(){};
cc.BuilderReader.prototype.loadAsScene = function(file, owner, parentSize){};

cc.CallFunc = function(){};
cc.CallFunc.create = function(selector, target){};

cc.Class = function(){};
cc.Class.ctor = function(){};
cc.Class.extend = function (prop){};

cc.ClippingNode = function(){};
cc.ClippingNode.create = function(){};
cc.ClippingNode.setStencil = function(stencil){};

cc.c3b = function(r, g, b){};
cc.c3;

cc.DelayTime = function(){};
cc.DelayTime.create = function(){};

cc.Director = function(){};
cc.Director.getInstance = function(){};
cc.Director.prototype.getRunningScene = function(){};
cc.Director.prototype.replaceScene = function(scene){};
cc.Director.prototype.runWithScene = function(scene){};
cc.Director.prototype.getVisibleSize = function(){};
cc.Director.prototype.getWinSize = function(){};

cc.DrawNode = function(){};
cc.DrawNode.create = function(){};
cc.DrawNode.prototype.drawPoly = function(verts, fillColor, borderWidth, borderColor){};

cc.FadeIn = function(){};
cc.FadeIn.create = function(duration){};

cc.FadeOut = function(){};
cc.FadeOut.create = function(duration){};

cc.GLNode = function(){};

cc.GLProgram = function(){};
cc.GLProgram.prototype.addAttribute = function(name, value){};
cc.GLProgram.prototype.create = function(vertexShader, fragmentShader){};
cc.GLProgram.prototype.getProgram = function(){};
cc.GLProgram.prototype.getUniformLocation = function(program, name){};
cc.GLProgram.prototype.link = function(){};
cc.GLProgram.prototype.release = function(){};
cc.GLProgram.prototype.retain = function(){};
cc.GLProgram.prototype.setUniformLocationWithMatrix4fv = function(matrix){};
cc.GLProgram.prototype.setUniformLocationF32 = function(valueList){};
cc.GLProgram.prototype.updateUniforms = function(){};
cc.GLProgram.prototype.use = function(){};

cc.LabelBMFont = function(){};
cc.LabelBMFont.prototype.getString = function(){};
cc.LabelBMFont.prototype.setColor = function(color){};
cc.LabelBMFont.prototype.setScale = function(scale, scaleY){};
cc.LabelBMFont.prototype.setString = function(text){};

cc.LabelTTF = function(){};
cc.LabelTTF.create = function(){};
cc.LabelTTF.prototype.setDimensions = function(size){};
cc.LabelTTF.prototype.setFontSize = function(size){};
cc.LabelTTF.prototype.setHorizontalAlignment = function(alignment){};
cc.LabelTTF.prototype.setVerticalAlignment = function(alignment){};

cc.JumpBy = function(){};
cc.JumpBy.create = function(duration, position, height, jumps){};

cc.Layer = function(){};
cc.Layer.prototype.setTouchEnabled = function(enabled){};
cc.Layer.prototype.setTouchMode = function(mode){};
cc.Layer.prototype.setTouchPriority = function(priority){};

cc.Menu = function(){};
cc.Menu.setEnabled = function(enabled){};

cc.MenuItem = function(){};
cc.MenuItem.prototype.setCallback = function(selector, target){};
cc.MenuItem.prototype.setNormalImage = function(normalImage){};

cc.Node = function(){};
cc.Node.create = function(){};
cc.Node.prototype.addChild = function(child, zOrder, tag){};
cc.Node.prototype.controller; // controller for CCBI
cc.Node.prototype.convertToNodeSpace = function(position){};
cc.Node.prototype.convertToWorldSpace = function(position){};
cc.Node.prototype.convertTouchToNodeSpace = function(touch){};
cc.Node.prototype.draw = function(){};
cc.Node.prototype.getActionByTag = function(tag){};
cc.Node.prototype.getBoundingBox = function(){};
cc.Node.prototype.getContentSize = function(){};
cc.Node.prototype.getPosition = function(){};
cc.Node.prototype.getScale = function(){};
cc.Node.prototype.getScaleX = function(){};
cc.Node.prototype.getScaleY = function(){};
cc.Node.prototype.isVisible = function(){};
cc.Node.prototype.onTouchBegan = function(touch, event){};
cc.Node.prototype.onTouchEnded = function(touch, event){};
cc.Node.prototype.onTouchMoved = function(touch, event){};
cc.Node.prototype.onUpdate = function(){};
cc.Node.prototype.removeFromParent = function(){};
cc.Node.prototype.retain = function(){};
cc.Node.prototype.removeAllChildren = function(){};
cc.Node.prototype.runAction = function(action){};
cc.Node.prototype.schedule = function(callback, interval, repeat, delay){};
cc.Node.prototype.scheduleOnce = function(callback, delay){};
cc.Node.prototype.scheduleUpdate = function(){};
cc.Node.prototype.setAnchorPoint = function(anchorPoint){};
cc.Node.prototype.setContentSize = function(size){};
cc.Node.prototype.setPosition = function(position){};
cc.Node.prototype.setScale = function(scale){};
cc.Node.prototype.setScaleX = function(scale){};
cc.Node.prototype.setScaleY = function(scale){};
cc.Node.prototype.setTag = function(tag){};
cc.Node.prototype.setZOrder = function(ZOrder){};
cc.Node.prototype.stopActionByTag = function(tag){};
cc.Node.prototype.stopAllActions = function(){};
cc.Node.prototype.unschedule = function(func){};
cc.Node.prototype.unscheduleAllCallbacks = function(){};

cc.ParticleSystem = function(){};
cc.ParticleSystem.prototype.setAutoRemoveOnFinish = function(autoRemove){};
cc.ParticleSystem.prototype.setStartColor = function(startColor){};
cc.ParticleSystem.prototype.setEndColor = function(endColor){};
cc.ParticleSystem.prototype.getLife = function(){};
cc.ParticleSystem.prototype.getLifeVar = function(){};

cc.ParticleSystemQuad = function(){};
cc.ParticleSystemQuad.create = function(){};
cc.ParticleSystemQuad.prototype.initWithFile = function(fileName){};

cc.p = function(x, y){};
cc.pAdd = function(p1, p2){};
cc.pSub = function(p1, p2){};

cc.rectContainsPoint = function(rect, point){};

cc.RenderTexture = function(){};
cc.RenderTexture.create  = function(width, height, format, depthStencilFormat){};
cc.RenderTexture.prototype.setAutoDraw = function(autoDraw){};

cc.RepeatForever = function(){};
cc.RepeatForever.create = function(action){};

cc.RotateBy = function(){};
cc.RotateBy.create = function(duration, degres){};

cc.ScaleTo = function(){};
cc.ScaleTo.create = function(duration, toScale){};

cc.ScaleBy = function(){};
cc.ScaleBy.create = function(duration, byScale){};

cc.ScrollView = function(){};
cc.ScrollView.prototype.getContentOffset = function(){};
cc.ScrollView.prototype.maxContainerOffset = function(){};
cc.ScrollView.prototype.minContainerOffset = function(){};
cc.ScrollView.prototype.setClippingToBounds = function(clippingToBounds){};
cc.ScrollView.prototype.setContainer = function(container){};
cc.ScrollView.prototype.setContentOffset = function(offset){};

cc.Sequence = function(){};
cc.Sequence.create = function(){};

cc.Spawn = function(){};
cc.Spawn.create = function(actionList){};

cc.MoveBy = function(){};
cc.MoveBy.create = function(){};

cc.MoveTo = function(){};
cc.MoveTo.create = function(duration, position){};

cc.Sprite = function(){};
cc.Sprite.prototype.init = function(fileName){};
cc.Sprite.prototype.setVisible = function(visible){};

cc.SpriteBatchNode = function(){};
cc.SpriteBatchNode.prototype.setOpacity = function(opacity){};

cc.Scale9Sprite = function(){};
cc.Scale9Sprite.prototype.getPreferredSize = function(){};
cc.Scale9Sprite.prototype.setPreferredSize = function(size){};

cc.TextureCache = function(){};
cc.TextureCache.getInstance = function(){};
cc.TextureCache.prototype.addImage = function(image){};
