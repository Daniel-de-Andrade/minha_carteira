import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from './styles';

const Dashboard: React.FC = () => {

    const options = [
        {value: 'Daniel', label: 'Daniel'},
        {value: 'Rodrigo', label: 'Rodrigo'},
        {value: 'Ana', label: 'Ana'},
    ]
 
    const frutas = [
     {value: 'banana', label: 'banana'},
     {value: 'pera', label: 'pera'},
     {value: 'uva', label: 'uva'},
 ]
 

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#f7931b">
                <SelectInput options={options} onChange={() => {}}/>
            </ContentHeader>
        </Container>
    )
}

export default Dashboard;