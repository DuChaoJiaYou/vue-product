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
