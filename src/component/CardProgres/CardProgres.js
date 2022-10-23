import React from 'react'
import { Progress } from 'antd';


function CardProgres({ room }) {

  return (
    <div>
      <h1>CardProgres</h1>
    <Progress type="dashboard" percent={75} />
    <Progress type="dashboard" percent={75} gapDegree={30} />
    </div>
  )
}

export default CardProgres