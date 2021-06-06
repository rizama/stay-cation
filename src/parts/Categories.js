import Button from 'elements/Button';
import React from 'react';
import Fade from 'react-reveal/Fade';

function Categories({ data }) {
    return data.map((category, index) => {
        if (category.itemId.length === 0) {
            return null;
        }
        return (
            <section className="container" key={`category-${index}`}>
                <Fade bottom>
                    <h4 className="mb-3 font-weight-medium">{category.name}</h4>
                    <div className="container-grid">
                        {category.itemId.map((item, indexItem) => {
                            return (
                                <div
                                    className="item column-3 row-1"
                                    key={`category-${index}-item-${indexItem}`}
                                >
                                    <Fade bottom delay={300 * indexItem}>
                                        <div className="card">
                                            {item.isPopular && (
                                                <div className="tag">
                                                    Popular{' '}
                                                    <span className="font-weight-light">
                                                        Choice
                                                    </span>
                                                </div>
                                            )}
                                            <figure
                                                className="img-wrapper"
                                                style={{ height: 180 }}
                                            >
                                                <img
                                                    className="img-cover"
                                                    src={
                                                        item.imageId[0]
                                                            ? `${process.env.REACT_APP_HOST}${item.imageId[0].imageUrl}`
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
                                                    {item.country}
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
    });
}

export default Categories;
