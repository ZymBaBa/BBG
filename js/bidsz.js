/**
*综合招标管理Created by iform on 2016-09-28.
 */
$(function () {
    $('#pp').pagination({
        total:2000,
        pageSize:10,

    });
    $('#cc').layout();
    $('#cc').layout('collapse','west');
    //审核
    $('#mAu').datagrid({
        width:1600,
        height:800,
        remoteSort:false,
        singleSelect:true,
        nowrap:false,
        fitColumns:true,
        url:'json/datagrid_data.json',
        columns:[[
            {field:'itemid',title:'序号',width:80},
            {field:'productid',title:'操作',width:120},
            /** 详细：能够看到具体内容
            * 通过：招标审核通过，短信通知
            * 不通过：招标审核不通过，短信通知，并且记录原因*/
            {field:'listprice',title:'招标ID',width:180},
            {field:'unitcost',title:'招标名称',width:180},
            {field:'attr1',title:'发标公司',width:180},
            {field:'status',title:'报名结束时间',width:180},
            {field:'status',title:'交标书时间',width:180},
            {field:'status',title:'报价开始时间',width:180},
            {field:'status',title:'保险要求',width:180},
            {field:'statusNun',title:'分类',width:120}
            /**保险要求：有、无
             * 分类按：物资采购、工程项目来分
             * */
        ]],
        view: detailview,
        detailFormatter: function(rowIndex, rowData){
            return '<table><tr>' +
                '<td rowspan=2 style="border:0"><img src="images/' + rowData.itemid + '.png" style="height:50px;"></td>' +
                '<td style="border:0">' +
                '<p>Attribute: ' + rowData.attr1 + '</p>' +
                '<p>Status: ' + rowData.status + '</p>' +
                '</td>' +
                '</tr></table>';
        }
    });
    //报名
    $('#mPn').datagrid({
        remoteSort:false,
        singleSelect:true,
        nowrap:false,
        fitColumns:true,
        url:'json/datagrid_data.json',
        columns:[[
            {field:'itemid',title:'序号',width:80},
            {field:'productid',title:'操作',width:120},
            /** 详细：能够看到具体内容
            */
            {field:'listprice',title:'招标ID',width:180},
            {field:'unitcost',title:'招标名称',width:180},
            {field:'attr1',title:'发标公司',width:180},
            {field:'status',title:'报名结束时间',width:180},
            {field:'status',title:'下限数量',width:180},
            {field:'status',title:'报名数量',width:180},
            {field:'status',title:'延期天数',width:180},
            {field:'statusNun',title:'类别',width:120}
        ]],
        view: detailview,
        detailFormatter: function(rowIndex, rowData){
            return '<table><tr>' +
                '<td rowspan=2 style="border:0"><img src="images/' + rowData.itemid + '.png" style="height:50px;"></td>' +
                '<td style="border:0">' +
                '<p>Attribute: ' + rowData.attr1 + '</p>' +
                '<p>Status: ' + rowData.status + '</p>' +
                '</td>' +
                '</tr></table>';
        }
    });
    //交标书
    $('#mQt').datagrid({
        remoteSort:false,
        singleSelect:true,
        nowrap:false,
        fitColumns:true,
        url:'json/datagrid_data.json',
        columns:[[
            {field:'itemid',title:'序号',width:80},
            {field:'productid',title:'操作',width:120},
            /** 详细：能够看到具体内容
             */
            {field:'listprice',title:'招标ID',width:180},
            {field:'unitcost',title:'招标名称',width:180},
            {field:'attr1',title:'发标公司',width:180},
            {field:'status',title:'交标书结束时间',width:180},
            {field:'status',title:'报名数量',width:180},
            {field:'status',title:'交标数量',width:180},
            {field:'statusNun',title:'类别',width:120}
        ]],
        view: detailview,
        detailFormatter: function(rowIndex, rowData){
            return '<table><tr>' +
                '<td rowspan=2 style="border:0"><img src="images/' + rowData.itemid + '.png" style="height:50px;"></td>' +
                '<td style="border:0">' +
                '<p>Attribute: ' + rowData.attr1 + '</p>' +
                '<p>Status: ' + rowData.status + '</p>' +
                '</td>' +
                '</tr></table>';
        }
    });
    //待报价
    $('#mTd').datagrid({
        remoteSort:false,
        singleSelect:true,
        nowrap:false,
        fitColumns:true,
        url:'json/datagrid_data.json',
        columns:[[
            {field:'itemid',title:'序号',width:80},
            {field:'productid',title:'操作',width:120},
            /** 详细：能够看到具体内容
             */
            {field:'listprice',title:'招标ID',width:180},
            {field:'unitcost',title:'招标名称',width:180},
            {field:'attr1',title:'发标公司',width:180},
            {field:'status',title:'交标书结束时间',width:180},
            {field:'status',title:'报名数量',width:180},
            {field:'status',title:'交标数量',width:180},
            {field:'statusNun',title:'类别',width:120}
        ]],
        view: detailview,
        detailFormatter: function(rowIndex, rowData){
            return '<table><tr>' +
                '<td rowspan=2 style="border:0"><img src="images/' + rowData.itemid + '.png" style="height:50px;"></td>' +
                '<td style="border:0">' +
                '<p>Attribute: ' + rowData.attr1 + '</p>' +
                '<p>Status: ' + rowData.status + '</p>' +
                '</td>' +
                '</tr></table>';
        }
    });
    //待报价
    $('#mBs').datagrid({
        remoteSort:false,
        singleSelect:true,
        nowrap:false,
        fitColumns:true,
        url:'json/datagrid_data.json',
        columns:[[
            {field:'itemid',title:'序号',width:80},
            {field:'productid',title:'操作',width:120},
            /** 详细：能够看到具体内容
             */
            {field:'listprice',title:'招标ID',width:180},
            {field:'unitcost',title:'招标名称',width:180},
            {field:'attr1',title:'发标公司',width:180},
            {field:'status',title:'报名数量',width:180},
            {field:'status',title:'报价数量',width:180},
            {field:'statusNun',title:'类别',width:120}
        ]],
        view: detailview,
        detailFormatter: function(rowIndex, rowData){
            return '<table><tr>' +
                '<td rowspan=2 style="border:0"><img src="images/' + rowData.itemid + '.png" style="height:50px;"></td>' +
                '<td style="border:0">' +
                '<p>Attribute: ' + rowData.attr1 + '</p>' +
                '<p>Status: ' + rowData.status + '</p>' +
                '</td>' +
                '</tr></table>';
        }
    });
    //流标
    $('#mFl').datagrid({
        remoteSort:false,
        singleSelect:true,
        nowrap:false,
        fitColumns:true,
        url:'json/datagrid_data.json',
        columns:[[
            {field:'itemid',title:'序号',width:80},
            {field:'productid',title:'操作',width:120},
            /** 详细：能够看到具体内容
             */
            {field:'listprice',title:'招标ID',width:180},
            {field:'unitcost',title:'招标名称',width:180},
            {field:'attr1',title:'发标公司',width:180},
            {field:'status',title:'开标下限',width:180},
            {field:'status',title:'报名数量',width:180},
            {field:'status',title:'延期天数',width:180},
            {field:'status',title:'交标书数',width:180},
            {field:'statusNun',title:'类别',width:120}
        ]],
        view: detailview,
        detailFormatter: function(rowIndex, rowData){
            return '<table><tr>' +
                '<td rowspan=2 style="border:0"><img src="images/' + rowData.itemid + '.png" style="height:50px;"></td>' +
                '<td style="border:0">' +
                '<p>Attribute: ' + rowData.attr1 + '</p>' +
                '<p>Status: ' + rowData.status + '</p>' +
                '</td>' +
                '</tr></table>';
        }
    });
    //废标
    $('#mVd').datagrid({
        remoteSort:false,
        singleSelect:true,
        nowrap:false,
        fitColumns:true,
        url:'json/datagrid_data.json',
        columns:[[
            {field:'itemid',title:'序号',width:80},
            {field:'productid',title:'操作',width:120},
            /** 详细：能够看到具体内容
             */
            {field:'listprice',title:'招标ID',width:180},
            {field:'unitcost',title:'招标名称',width:180},
            {field:'attr1',title:'发标公司',width:180},
            {field:'status',title:'开标下限',width:160},
            {field:'status',title:'报名数',width:160},
            {field:'status',title:'交标书',width:160},
            {field:'status',title:'报价数',width:160},
            {field:'status',title:'历史费标',width:160,sortable:true},
            {field:'statusNun',title:'类别',width:120}
        ]],
        view: detailview,
        detailFormatter: function(rowIndex, rowData){
            return '<table><tr>' +
                '<td rowspan=2 style="border:0"><img src="images/' + rowData.itemid + '.png" style="height:50px;"></td>' +
                '<td style="border:0">' +
                '<p>Attribute: ' + rowData.attr1 + '</p>' +
                '<p>Status: ' + rowData.status + '</p>' +
                '</td>' +
                '</tr></table>';
        }
    });
})