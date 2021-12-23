import axios from "axios";
import { BASE_URL } from "@/constants/url-root";
/**
 * @author duchao
 * @description 博客总览-获取数据列表接口
 *
 */
export const getBlogList = () => {
  return axios({
    method: "get",
    url: `${BASE_URL}/blog/list`,
  });
};

/**
 * @author duchao
 * @description 新增博客接口
 */
export const createBlog = (params: any) => {
  return axios({
    method: "post",
    url: `${BASE_URL}/blog/create`,
    data: params,
  });
};

/**
 * @author duchao
 * @description 修改博客接口
 */
export const updatedBlog = (_id: string, params: any) => {
  return axios({
    method: "put",
    url: `${BASE_URL}/blog/update/${_id}`,
    data: params,
  });
};

/**
 * @author duchao
 * @description 删除博客接口
 */
export const deleteBlogById = (_id: string) => {
  return axios({
    method: "delete",
    url: `${BASE_URL}/blog/delete/${_id}`,
  });
};

/**
 * @description 测试添加类别
 */
export const createCategory = (params: any) => {
  return axios({
    method: "post",
    url: `${BASE_URL}/createCategory`,
    data: params,
  });
};

/**
 * @description 获取类别上级分类 初始化
 */
export const initParentCategory = () => {
  return axios({
    method: "get",
    url: `${BASE_URL}/categoryParentList`,
  });
};
