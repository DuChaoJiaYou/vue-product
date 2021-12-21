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
export const deleteBlog = (params: any) => {
  return axios({
    method: "delete",
    url: `${BASE_URL}/blog/delete`,
    data: params,
  });
};
