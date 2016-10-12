/**
 * Created by iform on 2016-09-27.
 */
$(function () {
    $('#uc').datagrid({
        width:1600,
        height:800,
        remoteSort:false,
        singleSelect:true,
        nowrap:false,
        fitColumns:true,
        url:'json/datagrid_data.json',
        columns:[[
            {field:'itemid',title:'序号',width:80},
            {field:'productid',title:'操作',width:120,sortable:true},
            {field:'listprice',title:'手机号码',width:180,align:'right',sortable:true},
            {field:'unitcost',title:'注册时间',width:180,align:'right',sortable:true},
            {field:'attr1',title:'IP地址（归属）',width:180,sortable:true},
            {field:'status',title:'上次登录IP地址（归属）',width:180,align:'center'},
            {field:'statusNun',title:'登录次数',width:120,align:'center'}
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
    $('#uw').datagrid({
        width:1600,
        height:800,
        remoteSort:false,
        singleSelect:true,
        nowrap:false,
        fitColumns:true,
        url:'json/datagrid_data.json',
        columns:[[
            {field:'itemid',title:'序号',width:80},
            {field:'productid',title:'操作',width:120,sortable:true},
            /**
             * 操作的方式有审核不通过或者通过；
             * 不通过和通过都要进行短信推送通知；
             * 不通过的时候需要填写下不通过的原因。
             * */
            {field:'listprice',title:'手机号码',width:180,align:'right',sortable:true},
            {field:'unitcost',title:'企业名称',width:180,align:'right',sortable:true},
            {field:'attr1',title:'营业执照号',width:180,sortable:true},
            {field:'statusNun',title:'联系方式',width:180,align:'center'},
            {field:'statusName',title:'法人',width:120,align:'center'},
            {field:'statusAcc',title:'账号数',width:120,align:'center'}
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
    $('#ucp').datagrid({
        width:1600,
        height:800,
        remoteSort:false,
        singleSelect:true,
        nowrap:false,
        fitColumns:true,
        url:'json/datagrid_data.json',
        columns:[[
            {field:'itemid',title:'序号',width:80},
            {field:'productid',title:'操作',width:120,sortable:true},
            /**
             *详细：点进去能够看到企业的详细信息；
             * 禁用/启用：可以禁用或者启用企业下的所有相关账号；
             *  */
            {field:'unitcost',title:'企业名称',width:180,align:'right',sortable:true},
            {field:'attr1',title:'营业执照号',width:180,sortable:true},
            {field:'statusName',title:'法人',width:120,align:'center'},
            {field:'statusNun',title:'联系方式',width:180,align:'center'},
            {field:'statusAcc',title:'账号数',width:120,align:'center'},
            {field:'statusNun',title:'发标数',width:80,align:'center'},
            {field:'statusNun',title:'投标数',width:80,align:'center'},
            {field:'statusNun',title:'中标数',width:80,align:'center'},
            {field:'statusNun',title:'完成数',width:80,align:'center'}
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