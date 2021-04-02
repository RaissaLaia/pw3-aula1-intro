import React from 'react';

import FamilyMember from './FamilyMember'

export default props => {
    return(
        <div>
                <FamilyMember nome="Nemo" sobrenome={props.sobrenome} />
                <FamilyMember nome="Peter" sobrenome="Parker" />
                <FamilyMember nome="Larry" sobrenome={props.sobrenome} />
                <FamilyMember nome="Ziam" sobrenome={props.sobrenome} />
                <FamilyMember nome="Maya" {...props} />
        </div>
    )
}