<template>
  <div>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :before-upload="beforeUpload"
      :on-change="onChange"
      multiple
      :on-exceed="handleExceed"
      :on-success="handleSuccess"
      :auto-upload="false"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传mp3文件，且不超过500kb</div>
    </el-upload>
    <el-row v-for="(item, index) in fileList" :key="index">
      <base-audio :path="item.path"></base-audio>
      <span>{{item.name}}</span>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "AudioPlay",
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    onChange(file, fileList) {
        let change = {
            name: file.name,
            id: file.uid,
            path: URL.createObjectURL(file.raw)
        }
        let result
        this.fileList.find((item, index) => {
            if(item.uid === change.id) {
                result = index
            }
        })
        if (result) {
            this.fileList.splice(result, 1)
        } else {
            this.fileList.push(change)
        }
    },
    handleSuccess(res, file, fileList) {
    //   this.filePath = URL.createObjectURL(file.raw);
        console.log(res, file, fileList);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeUpload(file) {

    },
    beforeRemove(file, fileList) {
      //   return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>