function watchData(data, callback) {
    let obj = {  };
    let properties = {};
    let keys = Object.keys(data);
    keys.forEach(key => {
        properties[key] = {
            configurable: true,
            enumerable: true,
            get: function() {
                return data[key];
            },
            set: function(newValue) {
                if (data[key] !== newValue) {
                    data[key] = newValue;
                    callback({ [key]: newValue }, true);
                }
            }
        };
    });

    Object.defineProperties(obj, properties);
    return obj;
}

export default class Component {
    constructor() {
        this.state = {};
        this.props = {};
    }

    setState(state) {
        console.log('=====')
        this.state = watchData(state, this.render);

        this.state.a = 'a';
    }

    render() {
        console.log('component render')
    }
}