import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



    function RenderDish({dish}) {
        console.log('Dish: ', dish)
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    function RenderComments({dish}) {

        if (dish != null) {
            const dispayedComments = dish.comments.map((comment) => {
                return (
                    <p key={comment.id}>
                        {comment.comment}<br />
                        {comment.author} - {new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'short', 
                                day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                    </p>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <div>{dispayedComments}</div>
                </div>
            );
        }
        else
            return (
                <div></div>
            );
    }

    const  DishDetail = (props) => {


        return (
            <div className="container">
                <div className="row">
                    <div key='dishDetailDescription' className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.selectedDish} />
                    </div>
                    <div key='dishDetailComments' className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.selectedDish} />
                    </div>
                </div>
            </div>
        );

    }


export default DishDetail;