export const basicComponents = [
  {
    type: 'input',
    icon: 'icon-input',
    options: {
      width: '100%',
      defaultValue: '',
      required: false,
      dataType: 'string',
      pattern: '',
      placeholder: '',
      disabled: false,
    }
  },
  {
    type: 'textarea',
    icon: 'icon-diy-com-textarea',
    options: {
      width: '100%',
      defaultValue: '',
      required: false,
      disabled: false,
      pattern: '',
      placeholder: ''
    }
  },
  {
    type: 'number',
    icon: 'icon-number',
    options: {
      width: '',
      required: false,
      defaultValue: 0,
      min: '',
      max: '',
      step: 1,
      disabled: false,
      controlsPosition: ''
    }
  },
  {
    type: 'radio',
    icon: 'icon-radio-active',
    options: {
      inline: false,
      defaultValue: '',
      showLabel: false,
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        }
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',
      disabled: false,
    }
  },
  {
    type: 'checkbox',
    icon: 'icon-check-box',
    options: {
      inline: false,
      defaultValue: [],
      showLabel: false,
      options: [
        {
          value: 'Option 1'
        },
        {
          value: 'Option 2'
        },
        {
          value: 'Option 3'
        }
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',
      disabled: false,
    }
  },
  {
    type: 'time',
    icon: 'icon-time',
    options: {
      defaultValue: '21:19:56',
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      isRange: false,
      arrowControl: true,
      format: 'HH:mm:ss',
      required: false,
      width: '',
    }
  },
  {
    type: 'date',
    icon: 'icon-date',
    options: {
      defaultValue: '',
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      type: 'date',
      format: 'yyyy-MM-dd',
      timestamp: false,
      required: false,
      width: '',
    }
  },
  {
    type: 'rate',
    icon: 'icon-pingfen1',
    options: {
      defaultValue: null,
      max: 5,
      disabled: false,
      allowHalf: false,
      required: false
    }
  },
  {
    type: 'color',
    icon: 'icon-color',
    options: {
      defaultValue: '',
      disabled: false,
      showAlpha: false,
      required: false
    }
  },
  {
    type: 'select',
    icon: 'icon-select',
    options: {
      defaultValue: '',
      multiple: false,
      disabled: false,
      clearable: false,
      placeholder: '',
      required: false,
      showLabel: false,
      width: '',
      options: [
        {
          value: 'Option 1'
        },
        {
          value: 'Option 2'
        },
        {
          value: 'Option 3'
        }
      ],
      remote: false,
      filterable: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: ''
    }
  },
  {
    type: 'switch',
    icon: 'icon-switch',
    options: {
      defaultValue: false,
      required: false,
      disabled: false,
    }
  },
  {
    type: 'text',
    icon: 'icon-wenzishezhi-',
    options: {
      defaultValue: 'This is a text',
      customClass: '',
    }
  },
  {
    type: 'nps',
    icon: 'icon-icon-test',
    options: {
      inline: true,
      defaultValue: '',
      // answer: '',
      showLabel: false,
      options: [
        {
          value: '1',
          label: '1'
        },
        {
          value: '2',
          label: '2'
        },
        {
          value: '3',
          label: '3'
        },
        {
          value: '4',
          label: '4'
        },
        {
          value: '5',
          label: '5'
        }
      ],
      required: false,
      npsValue: 5,
      width: '',
      remote: false,
      remoteOptions: [],
      textValue: 'Would you recommend us to your friends or family?',
      descriptionValue: 'Add description',
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',
      disabled: false,
    }
  },
  {
    type: 'mcqMultiple',
    icon: 'icon-check-box',
    options: {
      inline: false,
      defaultValue: [],
      showLabel: false,
      options: [
        {
          value: 'Bandarban'
        },
        {
          value: 'Rangamati'
        },
        {
          value: 'Sylhet'
        },
        {
          value: 'Cox\'s Bazar'
        }
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      textValue: 'What are the places you want to visit?',
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',
      disabled: false,
    }
  },
  {
    type: 'mcqSingle',
    icon: 'icon-radio-active',
    options: {
      inline: false,
      defaultValue: '',
      showLabel: false,
      options: [
        {
          value: 'Football',
          label: 'Option 1'
        },
        {
          value: 'Cricket',
          label: 'Option 2'
        },
        {
          value: 'Table Tennis',
          label: 'Option 3'
        },
        {
          value: 'Badminton',
          label: 'Option 4'
        }
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      textValue: 'What is your most favourite game?',
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',
      disabled: false,
    }
  },
  {
    type: 'rating',
    icon: 'icon-pingfen1',
    options: {
      defaultValue: null,
      max: 5,
      textValue: 'How would you rate your experience with Red.Digital?',
      descriptionValue: 'Add description',
      disabled: false,
      allowHalf: false,
      required: false
    }
  },
  {
    type: 'matrix',
    icon: 'icon-table',
    options: {
      inline: true,
      defaultValue: ['', ''],
      // defaultValueFirst: '',
      // defaultValueSecond: '',
      // answer: '',
      showLabel: false,
      options1: [
        { value: 'Option 11', label: 'Option 11'},
        { value: 'Option 12', label: 'Option 12'}
      ],
      options2: [
        { value: 'Option 21', label: 'Option 21'},
        { value: 'Option 22', label: 'Option 22'}
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      textValue: 'Select an option from the matrix.',
      descriptionValue: 'Add description',
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',
      disabled: false,
    }
  },
  {
    type: 'yesno',
    icon: 'icon-switch',
    options: {
      inline: true,
      defaultValue: '',
      showLabel: false,
      options: [
        {
          value: 'Yes',
          label: 'Yes'
        },
        {
          value: 'No',
          label: 'No'
        }
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      textValue: 'Are you an employee of Red.Digital Limited?',
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',
      disabled: false,
    }
  },
  {
    type: 'openEnded',
    icon: 'icon-diy-com-textarea',
    options: {
      width: '100%',
      textValue: 'What is your question?',
      defaultValue: '',
      required: false,
      disabled: false,
      pattern: '',
      placeholder: 'Write your answer here...'
    }
  },
  {
    type: 'slider',
    icon: 'icon-slider',
    options: {
      disabled: false,
      required: false,
      defaultValue: 0,
      min: 0,
      max: 100,
      step: 1,
      showInput: false,
      range: false,
      textValue: 'Slide to the desired value.',
      width: ''
    }
  },
  {
    type: 'matrixDynamic',
    icon: 'icon-icon-test',
    options: {
      inline: true,
      defaultValue: ['', '', '', ''],
      showLabel: true,
      rowOptions: [
        { name: 'Food', value: 'food' },
        { name: 'Environment', value: 'environment' },
        { name: 'People', value: 'people' },
        { name: 'Music', value: 'music' }
      ],
      columnOptions: [
        { name: 'Very Unsatisfied', value: '1' },
        { name: 'Unsatisfied', value: '2' },
        { name: 'Neutral', value: '3' },
        { name: 'Satisfied', value: '4' },
        { name: 'Very Satisfied', value: '5' }
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      textValue: 'How satisfied are you with the following?',
      descriptionValue: 'Add description',
      props: {
        name: 'name',
        // id: 'id',
        value: 'value'
      },
      remoteFunc: '',
      disabled: false,
    }
  }
]

export const advanceComponents = [
  {
    type: 'blank',
    icon: 'icon-zidingyishuju',
    options: {
      defaultType: 'String'
    }
  },
  {
    type: 'imgupload',
    icon: 'icon-tupian',
    options: {
      defaultValue: [],
      size: {
        width: 100,
        height: 100,
      },
      width: '',
      tokenFunc: 'funcGetToken',
      token: '',
      domain: 'http://pfp81ptt6.bkt.clouddn.com/',
      disabled: false,
      length: 8,
      multiple: false,
      isQiniu: false,
      isDelete: false,
      min: 0,
      isEdit: false,
      action: 'https://jsonplaceholder.typicode.com/photos/'
    }
  },
  {
    type: 'editor',
    icon: 'icon-fuwenbenkuang',
    options: {
      defaultValue: '',
      width: ''
    }
  },
  {
    type: 'cascader',
    icon: 'icon-jilianxuanze',
    options: {
      defaultValue: [],
      width: '',
      placeholder: '',
      disabled: false,
      clearable: false,
      remote: true,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label',
        children: 'children'
      },
      remoteFunc: ''
    }
  }
]

export const layoutComponents = [
  {
    type: 'grid',
    icon: 'icon-grid-',
    columns: [
      {
        span: 12,
        list: []
      },
      {
        span: 12,
        list: []
      }
    ],
    options: {
      gutter: 0,
      justify: 'start',
      align: 'top'
    }
  }
]
