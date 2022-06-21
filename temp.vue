<template v-if="data.type=='matrixDynamic'">

    <el-radio-group v-for="(item, index) in data.options.rowOptions" v-model="data.options.rowOptions[index].name">
        <draggable tag="ul" :list="data.options.rowOptions" 
        v-bind="{group:{ name:'options'}, ghostClass: 'ghost',handle: '.drag-item'}"
        handle=".drag-item"
        >
        <!--                
        <li v-for="(item, index) in data.options.rowOptions" :key="index" > 
        -->
            <el-radio
            :label="item.value" 
            style="margin-right: 5px;"
            >
            <el-input :style="{'width': data.options.showLabel? '90px': '180px' }" size="mini" v-model="item.name"></el-input>
            <el-input style="width:90px;" size="mini" v-if="data.options.showLabel" v-model="item.value"></el-input>
            <!-- <input v-model="item.value"/> -->                  
            </el-radio>
            <!-- <i class="drag-item" style="font-size: 16px;margin: 0 5px;cursor: move;"><i class="iconfont icon-icon_bars"></i></i> -->
            <el-button @click="handleOptionsRemoveRow(index)" circle plain type="danger" size="mini" icon="el-icon-minus" style="padding: 4px;margin-left: 5px;"></el-button>
        <!--          
        </li>
        -->
        </draggable>
    </el-radio-group>

    <el-radio-group v-for="(item, index) in data.options.columnOptions" v-model="data.options.columnOptions[index].name">
        <draggable tag="ul" :list="data.options.columnOptions" 
        v-bind="{group:{ name:'options'}, ghostClass: 'ghost',handle: '.drag-item'}"
        handle=".drag-item"
        >
        <!--                
        <li v-for="(item, index) in data.options.rowOptions" :key="index" > 
        -->
            <el-radio
            :label="item.value" 
            style="margin-right: 5px;"
            >
            <el-input :style="{'width': data.options.showLabel? '90px': '180px' }" size="mini" v-model="item.name"></el-input>
            <el-input style="width:90px;" size="mini" v-if="data.options.showLabel" v-model="item.value"></el-input>
            <!-- <input v-model="item.value"/> -->                  
            </el-radio>
            <!-- <i class="drag-item" style="font-size: 16px;margin: 0 5px;cursor: move;"><i class="iconfont icon-icon_bars"></i></i> -->
            <el-button @click="handleOptionsRemoveColumn(index)" circle plain type="danger" size="mini" icon="el-icon-minus" style="padding: 4px;margin-left: 5px;"></el-button>
        <!--          
        </li>
        -->
        </draggable>
    </el-radio-group>
    <!--
    <el-radio-group v-for="(defaultVal, index) in data.options.defaultValue" v-model="data.options.defaultValue[index]">
        <draggable tag="ul" :list="data.options.columnOptions" 
        v-bind="{group:{ name:'options'}, ghostClass: 'ghost',handle: '.drag-item'}"
        handle=".drag-item"
        >
        <li v-for="(item, index) in data.options.columnOptions" :key="index" >
            <el-radio
            :label="item.value" 
            style="margin-right: 5px;"
            >
            <el-input :style="{'width': data.options.showLabel? '90px': '180px' }" size="mini" v-model="item.value"></el-input>
            <el-input style="width:90px;" size="mini" v-if="data.options.showLabel" v-model="item.label"></el-input>
            // <input v-model="item.value"/>                  
            </el-radio>
            //  <i class="drag-item" style="font-size: 16px;margin: 0 5px;cursor: move;"><i class="iconfont icon-icon_bars"></i></i> 
            //  <el-button @click="handleOptionsRemove(index)" circle plain type="danger" size="mini" icon="el-icon-minus" style="padding: 4px;margin-left: 5px;"></el-button> 
        </li>
        </draggable>
    </el-radio-group>
            -->
    <div style="margin-left: 22px;">
    <el-button type="text" @click="handleAddRowOption">{{$t('fm.actions.addRowOption')}}</el-button>
    <el-button type="text" @click="handleAddColumnOption">{{$t('fm.actions.addColumnOption')}}</el-button>
    </div>
</template>