import React from 'react';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons/faArrowsAlt';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';

import { StandardRowCon, IconGroupCon, RowInput, InputWrapper, IconWrapper } from './skins';
import ToolTip from '../../Common/ToolTip';

const StandardRow = (props) => {
  const { id, hierarchy, content, handleDragStart, handleDragOver, handleOnDrop, handleChangeInput, handleAction, handleDelete, isVisibleToolTip } = props;
  const IconAction = [
    {
      action: 'Move',
      onClick: null,
      icon: faArrowsAlt,
      disabled: false,
    },
    {
      action: 'Indent',
      onClick: (!(hierarchy === 1) ? () => handleAction(id, 'indent') : null),
      icon: faArrowLeft,
      disabled: hierarchy === 1,
    },
    {
      action: 'Outdent',
      onClick: (!(hierarchy === 3) ? () => handleAction(id, 'outdent') : null),
      icon: faArrowRight,
      disabled: hierarchy === 3,
    },
    {
      action: 'Delete',
      onClick: () => handleDelete(id),
      icon: faTrash,
      disabled: false,
    },
  ];

  const getSubTextColor = (hierarchy) => {
    let color = '';
    if (hierarchy === 1) {
      color = '#3cc1c5';
    } else if (hierarchy === 2) {
      color = '#191919';
    }
    return color;
  }

  return (
    <StandardRowCon
      jc="flex-start"
      ai="center"
      draggable
      onDragStart={(e) => handleDragStart(e, id)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => { handleOnDrop(e, id) }}
    >
      <IconGroupCon
        jc="space-evenly"
        ai="center"
      >
        {IconAction && IconAction.map(data => (
          <ToolTip
            key={data.action}
            message={data.action}
            position="top"
            isVisibleToolTip={isVisibleToolTip}
          >
            <IconWrapper
              icon={data.icon}
              onClick={data.onClick ? data.onClick : null}
              disabled={data.disabled}
            />
          </ToolTip>
        ))}
      </IconGroupCon>
      <InputWrapper marLeft={hierarchy * 4} ai="center">
        <RowInput
          autoFocus
          placeholder="Start Typing Standards ..."
          value={content}
          type="text"
          onChange={(e) => handleChangeInput(e, id)}
          textClr={getSubTextColor(hierarchy)}
        />
      </InputWrapper>
    </StandardRowCon>
  );
}

export default StandardRow;
