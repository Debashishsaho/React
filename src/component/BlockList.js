// path src/component
import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import Block from './Block';

const BlockList = () => {
  const [blocks, setBlocks] = useState([]);

  const addBlock = (type) => {
    setBlocks([...blocks, { type, content: '' }]);
  };

  const updateBlock = (index, updatedContent) => {
    const updatedBlocks = [...blocks];
    updatedBlocks[index].content = updatedContent;
    setBlocks(updatedBlocks);
  };

  const deleteBlock = (index) => {
    const updatedBlocks = blocks.filter((_, i) => i !== index);
    setBlocks(updatedBlocks);
  };

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Button block onClick={() => addBlock('text')}>
            Add Text Block
          </Button>
        </Col>
        <Col span={12}>
          <Button block onClick={() => addBlock('picture')}>
            Add Picture Block
          </Button>
        </Col>
      </Row>
      {blocks.map((block, index) => (
        <Block
          key={index}
          type={block.type}
          content={block.content}
          onChange={(updatedContent) => updateBlock(index, updatedContent)}
          onDelete={() => deleteBlock(index)}
          onEdit={() => console.log('Edit block', index)} // Implement edit functionality
        />
      ))}
    </div>
  );
};

export default BlockList;
