import Button from 'elements/Button';
import React from 'react';
import Fade from 'react-reveal/Fade';

function Activities({ data }) {
    if (data.activityId.length === 0) {
        return null;
    }
    return (
        <section className="container">
            <Fade bottom>
                <h4 className="mb-3 font-weight-medium">Activities</h4>
                <div className="container-grid">
                    {data.activityId.map((item, indexItem) => {
                        return (
                            <div
                                className="item column-3 row-1"
                                key={`activity-item-${indexItem}`}
                            >
                                <Fade bottom delay={300 * indexItem}>
                                    <div className="card">
                                        <figure
                                            className="img-wrapper"
                                            style={{ height: 180 }}
                                        >
                                            <img
                                                className="img-cover"
                                                src={
                                                    item.imageUrl
                                                        ? `${process.env.REACT_APP_HOST}${item.imageUrl}`
                                                        : ''
                                                }
                                                alt={item.name}
                                            />
                                        </figure>
                                        <div className="meta-wrapper">
                                            <Button
                                                type="link"
                                                href={`/properties/${item._id}`}
                                                className="streched-link d-block text-gray-800"
                                            >
                                                <h5 className="h4">
                                                    {item.name}
                                                </h5>
                                            </Button>
                                            <span className="text-gray-500">
                                                {item.type}, {data.country}
                                            </span>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        );
                    })}
                </div>
            </Fade>
        </section>
    );
}

export default Activities;
