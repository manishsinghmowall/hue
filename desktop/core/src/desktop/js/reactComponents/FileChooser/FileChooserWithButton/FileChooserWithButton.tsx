// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { useState } from 'react';
import { Button } from 'antd';

import './FileChooserWithButton.scss';
import FileChooserModal from '../FileChooserModal/FileChooserModal';

interface FileChooserWithButtonProps {
  title: string;
}

const defaultProps = { title: 'File chooser component' };

const FileChooserWithButton: React.FC<FileChooserWithButtonProps> = ({ title }): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button className="hue-file-chooser__button" type="primary" onClick={() => setShow(true)}>
        {title}
      </Button>

      <FileChooserModal
        onCancel={() => setShow(false)}
        show={show}
        title="Choose a file"
        okText="Select"
      />
    </>
  );
};

FileChooserWithButton.defaultProps = defaultProps;

export default FileChooserWithButton;
