// path src/component
import React, { useState } from 'react';
import { Card, Input, Button, Tooltip } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
} from '@ant-design/icons';

const Block = ({ type, content, onChange, onDelete, onEdit }) => {
  const [selectedText, setSelectedText] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const handleToggleBold = () => {
    setIsBold(!isBold);
  };

  const handleToggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const handleToggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const handleTextSelection = (e) => {
    setSelectedText(e.target.value.substring(e.target.selectionStart, e.target.selectionEnd));
  };

  const applyFormatting = () => {
    let formattedContent = content;
    if (selectedText && selectedText.length > 0) {
      formattedContent = content.replace(
        selectedText,
        `<span style="font-weight: ${isBold ? 'bold' : 'normal'}; font-style: ${
          isItalic ? 'italic' : 'normal'
        }; text-decoration: ${isUnderline ? 'underline' : 'none'};">${selectedText}</span>`
      );
    }
    return formattedContent;
  };

  return (
    <Card
      title={type === 'text' ? 'Text Block' : 'Picture Block'}
      style={{ marginBottom: 16, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
      actions={[
        <Tooltip title="Edit">
          <EditOutlined key="edit" onClick={onEdit} />
        </Tooltip>,
        <Tooltip title="Delete">
          <DeleteOutlined key="delete" onClick={onDelete} />
        </Tooltip>,
      ]}
    >
      {type === 'text' ? (
        <div>
          <Input.TextArea
            value={content}
            onChange={(e) => onChange(e.target.value)}
            onSelect={handleTextSelection}
            placeholder="Enter text (max 250 words)"
            autoSize={{ minRows: 3, maxRows: 6 }}
          />
          <div>
            <Button icon={<BoldOutlined />} onClick={handleToggleBold} type={isBold ? 'primary' : 'default'} />
            <Button icon={<ItalicOutlined />} onClick={handleToggleItalic} type={isItalic ? 'primary' : 'default'} />
            <Button icon={<UnderlineOutlined />} onClick={handleToggleUnderline} type={isUnderline ? 'primary' : 'default'} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: applyFormatting() }} style={{ marginTop: 16 }} />
        </div>
      ) : (
        <input type="file" accept="image/*" onChange={(e) => onChange(e.target.files[0])} />
      )}
    </Card>
  );
};

export default Block;