import React from 'react';
import ChartistGraph from 'react-chartist';

class DeckStats extends React.Component {
    componentWillReceiveProps() {
    }

    render() {
        var data = {
            labels: [],
            series: []
        };

        if(Object.keys(this.props).length > 0)
            this.props.cards.forEach(card => {
                card.types.forEach(type => {
                    type = type.toLowerCase();

                    if (!data.labels.includes(type))
                        data.labels.push(type);

                    if(!data.series[data.labels.indexOf(type)])
                        data.series.push(1);
                    else
                        data.series[data.labels.indexOf(type)] += 1;
                });
            });


        var options = {
            labelInterpolationFnc: function(value) {
                return value[0]
            }
        };

        var responsiveOptions = [
            [
                'screen and (min-width: 640px)', {
                    chartPadding: 20,
                    labelOffset: 40,
                    labelDirection: 'explode',
                    labelInterpolationFnc: function(value) {
                        return value;
                    }
                }
            ],
            [
                'screen and (min-width: 1024px)', {
                    labelOffset: 40,
                    chartPadding: 20
                }
            ]
        ];

        var type = 'Pie';

        return (
            <div>
                <ChartistGraph data={data} options={options} type={type} responsiveOptions={responsiveOptions}/>
            </div>
        )
    }
}

export default DeckStats;
