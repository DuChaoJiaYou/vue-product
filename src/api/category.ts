/**
 * 类别管理相关接口
 */
import { BASE_URL } from "@/constants/url-root";
import axios from "axios";
/**
 * @description 添加类别
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
