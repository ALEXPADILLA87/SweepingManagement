// component that decides which main component to load: read or create/update
var MainApp = React.createClass({

    // initial mode is 'read' mode
    getInitialState: function () {
        return {
            currentMode: 'read',
            sweepId: null,
            success: null,
            message: ''
        };
    },

    // used when use clicks something that changes the current mode
    changeAppMode: function (newMode, sweepId) {
        this.setState({ currentMode: newMode });
        if (sweepId !== undefined) {
            this.setState({ sweepId: sweepId });
        }
    },
    // ajax method
    ajax: function (url, type, data,callback) {
        $.ajax({
            url: url,
            type: type,
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (response) {
                        this.changeAppMode('read');
                
            }.bind(this),
            error: function (xhr, resp, text) {
                // show error to console
                console.log(xhr, resp, text);
            }
        });
    },
    // render the component based on current or selected mode
    render () {

        var modeComponent =
            <ReadComponent
                changeAppMode={this.changeAppMode} />;

        switch (this.state.currentMode) {
            case 'read':
                break;
            case 'readOne':
                modeComponent = <ReadOneComponent sweepId={this.state.sweepId} changeAppMode={this.changeAppMode} />;
                break;
            case 'create':
                modeComponent = <UpsertComponent changeAppMode={this.changeAppMode} ajax={this.ajax} />;
                break;
            case 'update':
                modeComponent = <UpsertComponent sweepId={this.state.sweepId} changeAppMode={this.changeAppMode} ajax={this.ajax} />;
                break;
            case 'delete':
                modeComponent = <DeleteComponent sweepId={this.state.sweepId} changeAppMode={this.changeAppMode} ajax={this.ajax} />;
                break;
            default:
                break;
        }

        return modeComponent;
    }
});

ReactDOM.render(
    <MainApp />,
    document.getElementById('content')
);