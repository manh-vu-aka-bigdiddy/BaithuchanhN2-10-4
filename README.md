11/ 4 / 2026
Grocery App - React Native (Expo)
Thông tin sinh viên
Họ tên: Vu Tien manh
MSSV: 23810310375
Mô tả ứng dụng

#Ứng dụng mô phỏng một hệ thống mua sắm thực phẩm (grocery app) được xây dựng bằng React Native + Expo.

 Chức năng chính:
 Đăng nhập người dùng
Lưu thông tin bằng AsyncStorage
 Quản lý giỏ hàng (Cart)
Thêm / xoá / tăng giảm số lượng sản phẩm
Tự động lưu giỏ hàng
 Yêu thích sản phẩm
 Tìm kiếm & lọc sản phẩm
 Đặt hàng
Lưu lịch sử đơn hàng
 Trang tài khoản
Hiển thị thông tin user
Hiển thị danh sách đơn hàng
Đăng xuất
 Công nghệ sử dụng
React Native (Expo)
AsyncStorage
React Hooks (useState, useEffect)
Local Storage (Web)
#Hướng dẫn chạy ứng dụng
1. Clone repo
git clone 
cd your-repo
2. Cài dependencies
npm install
3. Chạy ứng dụng
npx expo start
4. Mở app
Quét QR bằng Expo Go (Android/iOS)
Hoặc chạy trên web:
w
 Ảnh demo



<img width="1920" height="1020" alt="23810310375-vu-tien-manh-login" src="https://github.com/user-attachments/assets/55c55a35-ce1b-4156-aac1-cac866ff2104" />

<img width="1920" height="1019" alt="23810310375-vu-tien-manh-autologin" src="https://github.com/user-attachments/assets/5886ee9a-1d2a-4a7f-8891-4a38481ce904" />

<img width="1920" height="1017" alt="23810310375-vu-tien-manh-tat-app-van-login" src="https://github.com/user-attachments/assets/f6912184-2832-4fbe-b5eb-2ff515928031" />

<img width="706" height="886" alt="23810310375-vu-tien-manh-tangsoluongsp" src="https://github.com/user-attachments/assets/a87d28d8-6c08-49fe-8f62-f9811de39d60" />

<img width="1918" height="1018" alt="23810310375-vu-tien-manh-them-sp-vao-gio-hang" src="https://github.com/user-attachments/assets/82172389-3263-48d4-9a3a-31dd2203f58b" />

<img width="1916" height="1021" alt="23810310375-vu-tien-manh-them-gio-hang-thanh-cong" src="https://github.com/user-attachments/assets/0e1cdec0-7a6b-4ba9-b424-824a9577a540" />

<img width="1920" height="1019" alt="23810310375-vu-tien-manh-danh-sach-dat-hang-thanh-cong" src="https://github.com/user-attachments/assets/3ea69fce-c239-4565-85bd-0e4d168c24ea" />

<img width="1882" height="1016" alt="23810310375-vu-tien-manh-logout2" src="https://github.com/user-attachments/assets/310fff25-4072-4500-af33-067eaa8e4119" />

##  Demo Video
Video mô tả các chức năng chính của ứng dụng:

 [Xem video tại đây](https://drive.google.com/file/d/1KUMUGkaIpPEQ_zrd5VZpSNbWBD53bo7v/view?usp=sharing)


#tra loi cau hoi 
AsyncStorage là một cơ chế lưu trữ dữ liệu dạng key–value trên thiết bị (local storage) trong React Native, cho phép ứng dụng lưu dữ liệu dưới dạng chuỗi JSON và truy xuất lại khi cần. Nó hoạt động bất đồng bộ (asynchronous), nghĩa là việc đọc/ghi dữ liệu không làm block UI, giúp app vẫn mượt khi xử lý dữ liệu nền. So với việc chỉ dùng state, AsyncStorage có ưu điểm là dữ liệu vẫn được giữ lại ngay cả khi tắt app hoặc reload, trong khi state chỉ tồn tại tạm thời trong runtime và sẽ mất khi ứng dụng khởi động lại. Tuy nhiên, AsyncStorage không thay thế hoàn toàn state mà thường được dùng kết hợp (state để hiển thị, AsyncStorage để lưu lâu dài). So với Context API, AsyncStorage dùng để lưu trữ dữ liệu bền vững (persistent storage), còn Context API dùng để chia sẻ state giữa nhiều component trong cùng một phiên chạy. Context không lưu được dữ liệu sau khi reload, còn AsyncStorage thì có thể, vì vậy hai công nghệ này phục vụ mục đích khác nhau nhưng thường được kết hợp trong ứng dụng thực tế.



# Nectar App 10/4

Họ và tên: Vũ Tiến Mạnh
MSSV: 23810310375

## Screens da hoan thanh

- Checkout
- Order accepted
- Error
- Account

## Screenshot ket qua


### Checkout

![Checkout](./screenshots/checkout.png)

### Order accepted

![Order accepted](./screenshots/order-accepted.png)

### Error

![Error](./screenshots/error.png)

### Account

![Account](./screenshots/account.png)
