<template>
  <el-form-item class="widget-view "
      v-if="element && element.key" 
      :class="{active: selectWidget.key == element.key, 'is_req': element.options.required}"
      @click.native.stop="handleSelectWidget(index)"
    >
    <!-- :label="element.name" -->
        <template v-if="element.type == 'input'">
          <el-input 
            v-model="element.options.defaultValue"
            :style="{width: element.options.width}"
            :placeholder="element.options.placeholder"
            :disabled="element.options.disabled"
          ></el-input>
        </template>

        <template v-if="element.type == 'textarea'">
          <el-input type="textarea" :rows="5"
            v-model="element.options.defaultValue"
            :style="{width: element.options.width}"
            :disabled="element.options.disabled"
            :placeholder="element.options.placeholder"
          ></el-input>
        </template>

        <template v-if="element.type == 'number'">
          <el-input-number 
            v-model="element.options.defaultValue" 
            :disabled="element.options.disabled"
            :controls-position="element.options.controlsPosition"
            :style="{width: element.options.width}"
          ></el-input-number>
        </template>

        <template v-if="element.type == 'radio'">
          <el-radio-group v-model="element.options.defaultValue"
            :style="{width: element.options.width}"
            :disabled="element.options.disabled"
          >
            <el-radio  
              :style="{display: element.options.inline ? 'inline-block' : 'block'}"
              :label="item.value" v-for="(item, index) in element.options.options" :key="item.value + index"
              
            >
              {{element.options.showLabel ? item.label : item.value}}
            </el-radio>
          </el-radio-group>
        </template>
        
        <template v-if="element.type == 'nps'">
          <!-- <span>{{element.options.textValue}}</span> -->
          <p v-html="element.options.textValue"></p>
          <br>
          <!-- <p>{{element.options.descriptionValue}}</p> -->
          <p v-html="element.options.descriptionValue"></p>
         <!-- <span>{{element.options.descriptionValue}}</span> -->
          <br>
          <el-radio-group v-model="element.options.defaultValue"
            :style="{width: element.options.width}"
            :disabled="element.options.disabled"
          >
            <el-radio  
              :style="{display: element.options.inline ? 'inline-block' : 'block'}"
              :label="item.value" v-for="(item, index) in element.options.options" :key="item.value + index"
              
            >
              {{element.options.showLabel ? item.label : item.value}}
            </el-radio>
          </el-radio-group>
        </template>

        <template v-if="element.type == 'mcqSingle'">
          <p v-html="element.options.textValue"></p>
          <br>
          <el-radio-group v-model="element.options.defaultValue"
            :style="{width: element.options.width}"
            :disabled="element.options.disabled"
          >
            <el-radio  
              :style="{display: element.options.inline ? 'inline-block' : 'block'}"
              :label="item.value" v-for="(item, index) in element.options.options" :key="item.value + index"
              
            >
              {{element.options.showLabel ? item.label : item.value}}
            </el-radio>
          </el-radio-group>
        </template>

        <template v-if="element.type == 'rating'">
          <p v-html="element.options.textValue"></p>
          <br>
          <p v-html="element.options.descriptionValue"></p>
          <br>
          <el-rate v-model="element.options.defaultValue"
            :max="element.options.max"
            :disabled="element.options.disabled"
            :allow-half="element.options.allowHalf"
          ></el-rate>
        </template>

        <template v-if="element.type == 'matrix'">
          <p v-html="element.options.textValue"></p>
          <br>
          <p v-html="element.options.descriptionValue"></p>
          <br>
          <table>
            <tr>
              <td></td>
              <td>1st Column</td>
              <td>2nd Column</td>
            </tr>
            <tr>
              <td>1st Row</td>
              <td colspan="2">
                <el-radio-group v-model="element.options.defaultValue[0]"
                  :style="{width: element.options.width}"
                  :disabled="element.options.disabled"
                >
                  <el-radio  
                    :style="{display: element.options.inline ? 'inline-block' : 'block'}"
                    :label="item.value" v-for="(item, index) in element.options.options1" :key="item.value + index"
                    
                  >
                    {{element.options.showLabel ? item.label : item.value}}
                  </el-radio>
                </el-radio-group>
              </td>
            </tr>
            <tr>
              <td>2nd Row</td>
              <td colspan="2">
                <el-radio-group v-model="element.options.defaultValue[1]"
                  :style="{width: element.options.width}"
                  :disabled="element.options.disabled"
                >
                  <el-radio  
                    :style="{display: element.options.inline ? 'inline-block' : 'block'}"
                    :label="item.value" v-for="(item, index) in element.options.options2" :key="item.value + index"
                    
                  >
                    {{element.options.showLabel ? item.label : item.value}}
                  </el-radio>
                </el-radio-group>
              </td>
            </tr>
          </table>
          <!--
          <el-radio-group v-model="element.options.defaultValue[0]"
            :style="{width: element.options.width}"
            :disabled="element.options.disabled"
          >
            <el-radio  
              :style="{display: element.options.inline ? 'inline-block' : 'block'}"
              :label="item.value" v-for="(item, index) in element.options.options1" :key="item.value + index"
              
            >
              {{element.options.showLabel ? item.label : item.value}}
            </el-radio>
          </el-radio-group>
          <br>
          <el-radio-group v-model="element.options.defaultValue[1]"
            :style="{width: element.options.width}"
            :disabled="element.options.disabled"
          >
            <el-radio  
              :style="{display: element.options.inline ? 'inline-block' : 'block'}"
              :label="item.value" v-for="(item, index) in element.options.options2" :key="item.value + index"
              
            >
              {{element.options.showLabel ? item.label : item.value}}
            </el-radio>
          </el-radio-group>
          -->
        </template>

        <template v-if="element.type == 'matrixDynamic'">
          <p v-html="element.options.textValue"></p>
          <br>
          <p v-html="element.options.descriptionValue"></p>
          <br>
          <table>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" v-for="column in element.options.columnOptions" :key="column.value">
                {{ column.name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in element.options.rowOptions" :key="row.name" >
                <th scope="row">
                  <div>
                    <label>{{ row.name }}</label>
                  </div>
                </th>
                <td :colspan="element.options.columnOptions.length">
                    
                    <el-radio-group v-model="element.options.defaultValue[index]"
                      :style="{width: element.options.width}"
                      :disabled="element.options.disabled"
                    >
                      <el-radio  
                        :style="{display: element.options.inline ? 'inline-block' : 'block'}"
                        :label="item.value" v-for="(item, index) in element.options.columnOptions" :key="item.value + index"
                        
                      >
                        {{element.options.showLabel ? item.label : item.value}}
                      </el-radio>
                    </el-radio-group>
                </td>
                <!--
                -->
                <!--
                <td>
                  <input
                    type="radio"
                    :name="row.value"
                    :value="column.value"
                    v-model="element.options.defaultValue[index]"
                    :style="{display: element.options.inline ? 'inline-block' : 'block'}"
                  />
                </td>
                <td v-for="column in element.options.columnOptions" :key="column.value">
                  <input
                    type="radio"
                    :name="row.name"
                    
                    :value="choice.value"
                    :checked="value && value[question.id] === choice.value"
                    :class="schema.fieldClasses"
                    v-attributes="'input'"
                  />
                </td>

                  v-model="element.options.defaultValue[index]"
                  v-for="column in element.options.columnOptions" :key="column.value"
                  <input
                    type="radio"
                    :name="row.value"
                    :value="column.value"
                    :style="{display: element.options.inline ? 'inline-block' : 'block'}"
                  />
                    :this.element.options.defaultValue[index]="column.value"
                    v-attributes="'input'"
                    @click="handleChange(row, column, $event)"
                    :checked="value && value[row.id] === column.value"
                    :label="column.value"

                    
                    @click="handleChange(question, choice, $event)"
                    :value="choice.value"
                    :checked="value && value[question.id] === choice.value"
                    :class="schema.fieldClasses"
                    v-attributes="'input'"
                -->
              </tr>
            </tbody>
          </table>
        </template>

        <template v-if="element.type == 'mcqMultiple'">
          <p v-html="element.options.textValue"></p>
          <br>
          <el-checkbox-group v-model="element.options.defaultValue"
            :style="{width: element.options.width}"
            :disabled="element.options.disabled"
          >
            <el-checkbox
              :style="{display: element.options.inline ? 'inline-block' : 'block'}"
              :label="item.value" v-for="(item, index) in element.options.options" :key="item.value + index"
            >
              {{element.options.showLabel ? item.label : item.value}}
            </el-checkbox>
          </el-checkbox-group>
        </template>

        <template v-if="element.type == 'yesno'">
          <p v-html="element.options.textValue"></p>
          <br>
          <el-radio-group v-model="element.options.defaultValue"
            :style="{width: element.options.width}"
            :disabled="element.options.disabled"
          >
            <el-radio  
              :style="{display: element.options.inline ? 'inline-block' : 'block'}"
              :label="item.value" v-for="(item, index) in element.options.options" :key="item.value + index"
            >
              {{element.options.showLabel ? item.label : item.value}}
            </el-radio>
          </el-radio-group>
        </template>

        <template v-if="element.type == 'openEnded'">
          <p v-html="element.options.textValue"></p>
          <br>
          <el-input type="textarea" :rows="2"
            v-model="element.options.defaultValue"
            :style="{width: element.options.width}"
            :disabled="element.options.disabled"
            :placeholder="element.options.placeholder"
          ></el-input>
        </template>

        <template v-if="element.type == 'checkbox'">
          <el-checkbox-group v-model="element.options.defaultValue"
            :style="{width: element.options.width}"
            :disabled="element.options.disabled"
          >
            <el-checkbox
              :style="{display: element.options.inline ? 'inline-block' : 'block'}"
              :label="item.value" v-for="(item, index) in element.options.options" :key="item.value + index"
            >
              {{element.options.showLabel ? item.label : item.value}}
            </el-checkbox>
          </el-checkbox-group>
        </template>

        <template v-if="element.type == 'time'">
          <el-time-picker 
            v-model="element.options.defaultValue"
            :is-range="element.options.isRange"
            :placeholder="element.options.placeholder"
            :start-placeholder="element.options.startPlaceholder"
            :end-placeholder="element.options.endPlaceholder"
            :readonly="element.options.readonly"
            :disabled="element.options.disabled"
            :editable="element.options.editable"
            :clearable="element.options.clearable"
            :arrowControl="element.options.arrowControl"
            :style="{width: element.options.width}"
          >
          </el-time-picker>
        </template>

        <template v-if="element.type == 'date'">
          <el-date-picker
            v-model="element.options.defaultValue"
            :type="element.options.type"
            :is-range="element.options.isRange"
            :placeholder="element.options.placeholder"
            :start-placeholder="element.options.startPlaceholder"
            :end-placeholder="element.options.endPlaceholder"
            :readonly="element.options.readonly"
            :disabled="element.options.disabled"
            :editable="element.options.editable"
            :clearable="element.options.clearable"
            :style="{width: element.options.width}"  
          >
          </el-date-picker>
        </template>

        <template v-if="element.type == 'rate'">
          <el-rate v-model="element.options.defaultValue"
            :max="element.options.max"
            :disabled="element.options.disabled"
            :allow-half="element.options.allowHalf"
          ></el-rate>
        </template>

        <template v-if="element.type == 'color'">
          <el-color-picker 
            v-model="element.options.defaultValue"
            :disabled="element.options.disabled"
            :show-alpha="element.options.showAlpha"
          ></el-color-picker>
        </template>

        <template v-if="element.type == 'select'">
          <el-select
            v-model="element.options.defaultValue"
            :disabled="element.options.disabled"
            :multiple="element.options.multiple"
            :clearable="element.options.clearable"
            :placeholder="element.options.placeholder"
            :style="{width: element.options.width}"
          >
            <el-option v-for="item in element.options.options" :key="item.value" :value="item.value" :label="element.options.showLabel?item.label:item.value"></el-option>
          </el-select>
        </template>

        <template v-if="element.type=='switch'">
          <el-switch
            v-model="element.options.defaultValue"
            :disabled="element.options.disabled"
          >
          </el-switch>
        </template>

        <template v-if="element.type=='slider'">
          <!--
          -->
          <p v-html="element.options.textValue"></p>
          <br>
          <el-slider 
            v-model="element.options.defaultValue"
            :min="element.options.min"
            :max="element.options.max"
            :disabled="element.options.disabled"
            :step="element.options.step"
            :show-input="element.options.showInput"
            :range="element.options.range"
            :style="{width: element.options.width}"
          ></el-slider>
        </template>

        <template v-if="element.type=='imgupload'">
          <fm-upload
            v-model="element.options.defaultValue"
            :disabled="element.options.disabled"
            :style="{'width': element.options.width}"
            :width="element.options.size.width"
            :height="element.options.size.height"
            token="xxx"
            domain="xxx"
          >
            
          </fm-upload>
        </template>

        <template v-if="element.type == 'cascader'">
          <el-cascader
            v-model="element.options.defaultValue"
            :disabled="element.options.disabled"
            :clearable="element.options.clearable"
            :placeholder="element.options.placeholder"
            :style="{width: element.options.width}"
            :options="element.options.remoteOptions"
          >

          </el-cascader>
        </template>

        <template v-if="element.type == 'editor'">
          <!--
          <tiny-mce
            v-model="element.options.defaultValue"
            :style="{width: element.options.width}"
          >
          </tiny-mce>
          -->
          <vue-editor
            v-model="element.options.defaultValue"
            :style="{width: element.options.width}"
          >
          </vue-editor>
        </template>

        <template v-if="element.type=='blank'">
          <div style="height: 50px;color: #999;background: #eee;line-height:50px;text-align:center;">{{$t('fm.components.fields.blank')}}</div>
        </template>

        <template v-if="element.type == 'text'">
          <span>{{element.options.defaultValue}}</span>
        </template>

        <div class="widget-view-action" v-if="selectWidget.key == element.key">
          <i class="iconfont icon-icon_clone" @click.stop="handleWidgetClone(index)"></i>
          <i class="iconfont icon-trash" @click.stop="handleWidgetDelete(index)"></i>
        </div>

        <div class="widget-view-drag" v-if="selectWidget.key == element.key">
          <i class="iconfont icon-drag drag-widget"></i>
        </div>
        
    </el-form-item>
</template>

<script>
import FmUpload from './Upload'
export default {
  props: ['element', 'select', 'index', 'data'],
  components: {
    FmUpload,
  },
  data () {
    return {
      selectWidget: this.select
    }
  },
  mounted () {
    
  },
  methods: {
    handleSelectWidget (index) {
      this.selectWidget = this.data.list[index]
    },
    handleWidgetDelete (index) {
      if (this.data.list.length - 1 === index) {
        if (index === 0) {
          this.selectWidget = {}
        } else {
          this.selectWidget = this.data.list[index - 1]
        }
      } else {
        this.selectWidget = this.data.list[index + 1]
      }

      this.$nextTick(() => {
        this.data.list.splice(index, 1)
      })
    },
    handleWidgetClone (index) {
      const key = Date.parse(new Date().toString()) + '_' + Math.ceil(Math.random() * 99999)
      let cloneData = {
        ...this.data.list[index],
        options: {
          ...this.data.list[index].options,
          remoteFunc: 'func_' + key
        },
        key,
        model: this.data.list[index].type + '_' + key,
        rules: this.data.list[index].rules || []
      }

      if (this.data.list[index].type === 'nps' || this.data.list[index].type === 'mcqSingle' ||
          this.data.list[index].type === 'mcqMultiple' ||
          this.data.list[index].type === 'radio' || this.data.list[index].type === 'yesno' ||
          this.data.list[index].type === 'checkbox' || this.data.list[index].type === 'select') {

        cloneData = {
          ...cloneData,
          options: {
            ...cloneData.options,
            options: cloneData.options.options.map(item => ({...item}))
          }
        }
      }

      if (this.data.list[index].type === 'matrix') {

        cloneData = {
          ...cloneData,
          options: {
            ...cloneData.options,
            options1: cloneData.options.options1.map(item => ({...item})),
            options2: cloneData.options.options2.map(item => ({...item}))
          }
        }
      }

      if (this.data.list[index].type === 'matrixDynamic') {

        cloneData = {
          ...cloneData,
          options: {
            ...cloneData.options,
            rowOptions: cloneData.options.rowOptions.map(item => ({...item})),
            columnOptions: cloneData.options.columnOptions.map(item => ({...item}))
          }
        }
      }

      this.data.list.splice(index, 0, cloneData)

      this.$nextTick(() => {
        this.selectWidget = this.data.list[index + 1]
      })
    },
    handleChange (row, column, event) {
      this.value = Object.assign({}, this.value, { [row.id]: column.value })
    }
  },
  watch: {
    select (val) {
      this.selectWidget = val
    },
    selectWidget: {
      handler (val) {
        this.$emit('update:select', val)
      },
      deep: true
    }
  }
}
</script>
