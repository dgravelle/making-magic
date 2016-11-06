import React from 'react';
import ChartistGraph from 'react-chartist';

class DeckStats extends React.Component {
    componentWillReceiveProps() {
        console.log(this.props);
    }

    render() {
        var data = {
            labels: [],
            series: []
        };

        if(Object.keys(this.props).length > 0)
            this.props.cards.forEach(card => {
                console.log(card);
                card.types.forEach(type => {
                    console.log(type);
                    type = type.toLowerCase();

                    if (!data.labels.includes(type))
                        data.labels.push(type);

                    if(!data.series[data.labels.indexOf(type)])
                        data.series.push(1);
                    else
                        data.series[data.labels.indexOf(type)] += 1;
                });
            });

            console.log(data);

        var options = {
            labelInterpolationFnc: function(value) {
                return value[0]
            }
        };

        var responsiveOptions = [
            [
                'screen and (min-width: 640px)', {
                    chartPadding: 30,
                    labelOffset: 100,
                    labelDirection: 'explode',
                    labelInterpolationFnc: function(value) {
                        return value;
                    }
                }
            ],
            [
                'screen and (min-width: 1024px)', {
                    labelOffset: 80,
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
