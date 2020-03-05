import * as React from "react";
import Chart from "chart.js";
import Grid from "../shared/Grid";
import ContentFrame from "../shared/ContentFrame";
import Banner from "../shared/Banner";
import Summary from "../shared/Summary";
import BodyContent from "../shared/BodyContent";


interface Props {

}

const Graph: React.FunctionComponent<Props> = (props: Props) => {
    const ref = React.useRef<HTMLCanvasElement>(null);

    const setX = (): Array<number> => {
        return [2, 4, 5, 6, 7, 8]
    };
    const setY = (): Array<number> => {
        return [10, 20, 10, 10, 20, 50]
    };

    React.useEffect(() => {
        const xValues = setX();
        const yValues = setY();


        const ctx: any = ref.current!.getContext("2d");

        new Chart(ctx, {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [
                    {
                        label: "y value label",
                        data: yValues
                    }
                ]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text:
                        "first one"
                },
                scales: {
                    yAxes: [
                        {
                            scaleLabel: {
                                display: true,
                                labelString: "y value"
                            }
                        }
                    ],
                    xAxes: [
                        {
                            scaleLabel: {
                                display: true,
                                labelString: "x value"
                            }
                        }
                    ]
                }
            }
        });
    }, [props]);

    return (
        <Grid>
            <Banner>Graph</Banner>
            <ContentFrame>
                <BodyContent>
                    <Summary>
                        <canvas ref={ref} />
                    </Summary>
                </BodyContent>
            </ContentFrame>
        </Grid>
    );
};

export default Graph;